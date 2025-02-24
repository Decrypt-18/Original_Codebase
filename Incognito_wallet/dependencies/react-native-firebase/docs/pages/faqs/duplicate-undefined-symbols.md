---
title: Duplicate/Undefined Symbols
description: This error occurs during iOS build time. Fixing this error requires a clean of your project.
tags:
  - build
  - ios
---

# Duplicate Symbols / Undefined Symbols

Running updates to your project with multiple and/or changing versions can cause Xcode to become
confused about the expected version required to build your project. It can happen when updating to a
new version of React Native Firebase, or updating another projects pods.

Fixing the error requires the project to be cleaned and the projects dependencies to be re-installed:

1. Open the `/ios/.xcworkspace` file using Xcode.
2. Select Product > Clean Build Folder.
3. Close Xcode fully.
4. From your terminal, run `pod install` from the project `/ios` directory.
5. Reopen the `/ios/.xcworkspace` file using Xcode.
6. Rerun Product > Clean Build Folder.
7. Rerun your iOS build.
