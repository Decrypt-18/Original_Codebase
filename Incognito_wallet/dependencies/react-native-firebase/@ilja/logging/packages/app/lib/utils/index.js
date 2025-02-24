/*
 * Copyright (c) 2016-present Invertase Limited & Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this library except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

import { hasOwnProperty, isIOS, isObject } from '../../lib/common';
import { createModuleNamespace, FirebaseModule } from '../../lib/internal';
import Logger from './logger';
import UtilsStatics from './UtilsStatics';

const namespace = 'utils';
const statics = UtilsStatics;
const nativeModuleName = 'RNFBUtilsModule';

class FirebaseUtilsModule extends FirebaseModule {
  get isRunningInTestLab() {
    if (isIOS) {
      return false;
    }
    return this.native.isRunningInTestLab;
  }

  enableLogger(config) {
    if (!isObject(config)) {
      throw new Error('Invalid config passed to enableLogger');
    }

    if (
      !hasOwnProperty(config, 'enableMethodLogging') &&
      !hasOwnProperty(config, 'enableEventLogging')
    ) {
      throw new Error(
        'enableLogger expects at least one option: enableMethodLogging or enableEventLogging',
      );
    }

    Logger.config = { ...Logger.config, ...config };

    return Logger.config;
  }

  logger() {
    return Logger;
  }
}

// import { utils } from '@react-native-firebase/app';
// utils().X(...);
export default createModuleNamespace({
  statics,
  version: UtilsStatics.SDK_VERSION,
  namespace,
  nativeModuleName,
  nativeEvents: false,
  hasMultiAppSupport: false,
  hasCustomUrlOrRegionSupport: false,
  ModuleClass: FirebaseUtilsModule,
});
