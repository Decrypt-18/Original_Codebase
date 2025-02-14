import React from 'react';
import styled, { css, ITheme } from 'styled-components';
import { animated, useTransition } from 'react-spring';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import { isMobile } from 'react-device-detect';
import '@reach/dialog/styles.css';
import { transparentize } from 'polished';

const AnimatedDialogOverlay = animated(DialogOverlay);
const StyledDialogOverlay = styled(AnimatedDialogOverlay)`
    &[data-reach-dialog-overlay] {
        z-index: 2;
        background-color: ${({ theme }: { theme: ITheme }) => theme.modalBg};
        overflow: hidden;

        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const AnimatedDialogContent = animated(DialogContent);
// destructure to not pass custom props to Dialog DOM element
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const StyledDialogContent = styled(({ minHeight, maxHeight, mobile, isOpen, ...rest }) => (
    <AnimatedDialogContent {...rest} />
)).attrs({
    'aria-label': 'dialog',
})`
    overflow-y: ${({ mobile }) => (mobile ? 'scroll' : 'hidden')};

    &[data-reach-dialog-content] {
        margin: 0 0 2rem 0;
        background-color: ${({ theme }) => theme.white};
        box-shadow: 0 4px 8px 0 ${({ theme }) => transparentize(0.95, '#000')};
        padding: 0;
        width: 50vw;
        overflow-y: ${({ mobile }) => (mobile ? 'scroll' : 'hidden')};
        overflow-x: hidden;
        max-width: 500px;
        ${({ maxHeight }) =>
            maxHeight &&
            css`
                max-height: ${maxHeight}vh;
            `}
        ${({ minHeight }) =>
            minHeight &&
            css`
                min-height: ${minHeight}vh;
            `}
    display: flex;
        border-radius: 20px;
        ${({ theme }) => theme.mediaWidth.upToMedium`
      width: 65vw;
      margin: 0;
    `}
        ${({ theme, mobile }) => theme.mediaWidth.upToSmall`
      width:  85vw;
      ${
          mobile &&
          css`
              width: 90vw;
              height: 85vh;
              border-radius: 20px;
          `
      }
    `}
    }
`;

interface ModalProps {
    isOpen: boolean;
    onDismiss: () => void;
    minHeight?: number | false;
    maxHeight?: number;
    initialFocusRef?: React.RefObject<any>;
    children?: React.ReactNode;
}

export default function Modal({
    isOpen,
    onDismiss,
    minHeight = false,
    maxHeight = 90,
    initialFocusRef,
    children,
}: ModalProps) {
    const fadeTransition = useTransition(isOpen, null, {
        config: { duration: 200 },
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    });

    return (
        <>
            {fadeTransition.map(
                ({ item, key, props }) =>
                    item && (
                        <StyledDialogOverlay
                            key={key}
                            style={props}
                            onDismiss={onDismiss}
                            initialFocusRef={initialFocusRef}
                        >
                            <StyledDialogContent
                                aria-label="dialog content"
                                minHeight={minHeight}
                                maxHeight={maxHeight}
                                mobile={isMobile}
                            >
                                {children}
                            </StyledDialogContent>
                        </StyledDialogOverlay>
                    ),
            )}
        </>
    );
}
