import * as React from 'react';

import { useDraggable } from '@udecode/plate-dnd';
import type { TImageElement } from '@udecode/plate-media';
import {
  Image,
  ImagePlugin,
  useMediaState,
} from '@udecode/plate-media/react';
import {
  ResizableProvider,
  useResizableValue,
} from '@udecode/plate-resizable';
import type { PlateElementProps } from '@udecode/plate/react';
import {
  PlateElement,
  withHOC,
} from '@udecode/plate/react';

import { cn } from '../../../libs/utils';
import { BlockWithPlus } from '../core/element-wrapper';
import {
  Caption,
  CaptionTextarea,
} from './caption';
import { MediaPopover } from './media-popover';
import {
  mediaResizeHandleVariants,
  Resizable,
  ResizeHandle,
} from './resize-handle';

export const ImageElement:any = withHOC(
  ResizableProvider,
  function ImageElement(props: PlateElementProps<TImageElement>) {
    const { align = 'center', focused, readOnly, selected } = useMediaState();
    const width = useResizableValue('width');

    const { isDragging, handleRef } = useDraggable({
      element: props.element,
    });

    return (
      <BlockWithPlus element={props.element}>
        <MediaPopover plugin={ImagePlugin}>
          <PlateElement {...props} className="py-2.5">
            <figure className="group relative m-0" contentEditable={false}>
              <Resizable
                align={align}
                options={{
                  align,
                  readOnly,
                }}
              >
                <ResizeHandle
                  className={mediaResizeHandleVariants({ direction: 'left' })}
                  options={{ direction: 'left' }}
                />
                <Image
                  ref={handleRef}
                  className={cn(
                    'block w-full max-w-full cursor-pointer object-cover px-0',
                    'rounded-sm',
                    focused && selected && 'ring-2 ring-ring ring-offset-2',
                    isDragging && 'opacity-50'
                  )}
                  alt={(props.attributes as any).alt}
                />
                <ResizeHandle
                  className={mediaResizeHandleVariants({
                    direction: 'right',
                  })}
                  options={{ direction: 'right' }}
                />
              </Resizable>
  
              <Caption style={{ width }} align={align}>
                <CaptionTextarea
                  readOnly={readOnly}
                  onFocus={(e) => {
                    e.preventDefault();
                  }}
                  placeholder="Write a caption..."
                />
              </Caption>
            </figure>
  
            {props.children}
          </PlateElement>
        </MediaPopover>
      </BlockWithPlus>
    );
  }
);
