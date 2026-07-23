'use client';

import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { ChevronDown } from 'lucide-react';

import { cn } from '@/lib/utils';

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, style, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      'group relative flex h-9 w-full min-w-[148px] items-center justify-between gap-2 overflow-hidden whitespace-nowrap rounded-sm bg-[var(--bg-primary)] text-xs font-medium text-[var(--text-primary)] outline-none',
      'transition-colors duration-200',
      'hover:bg-[var(--bg-secondary)]',
      'focus-visible:outline-none',
      'data-[state=open]:bg-[var(--bg-secondary)]',
      'data-[placeholder]:text-[var(--text-tertiary)]',
      'disabled:cursor-not-allowed disabled:opacity-50',
      '[&>span]:line-clamp-1',
      className
    )}
    style={{
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'var(--text-primary)',
      boxSizing: 'border-box',
      paddingLeft: 14,
      paddingRight: 12,
      paddingTop: 6,
      paddingBottom: 6,
      ...style,
    }}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-3.5 w-3.5 shrink-0 opacity-80 transition-transform duration-200 ease-out group-data-[state=open]:rotate-180" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = 'popper', style, ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        'relative z-[1100] max-h-[min(28rem,var(--radix-select-content-available-height))] overflow-hidden rounded-sm border-0 text-[var(--text-primary)] shadow-[0_16px_40px_rgba(0,0,0,0.55)]',
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        'origin-[var(--radix-select-content-transform-origin)]',
        position === 'popper' &&
          'w-[var(--radix-select-trigger-width)] min-w-[var(--radix-select-trigger-width)] max-w-[var(--radix-select-trigger-width)] data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
        className
      )}
      position={position}
      style={{ backgroundColor: 'var(--bg-primary)', ...style }}
      {...props}
    >
      <SelectPrimitive.Viewport
        className="w-full box-border"
        style={{
          backgroundColor: 'var(--bg-primary)',
          paddingTop: 8,
          paddingBottom: 8,
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, style, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn(
      'py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--text-tertiary)]',
      className
    )}
    style={{ paddingLeft: 10, paddingRight: 8, ...style }}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, style, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      'relative flex w-full min-h-9 cursor-pointer select-none items-center rounded-sm py-2 text-sm outline-none transition-colors duration-150',
      'data-[highlighted]:bg-[var(--bg-secondary)] data-[highlighted]:text-[var(--text-primary)]',
      'data-[state=checked]:bg-[var(--text-primary)] data-[state=checked]:text-[var(--bg-primary)] data-[state=checked]:font-medium',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className
    )}
    style={{ paddingLeft: 10, paddingRight: 10, ...style }}
    {...props}
  >
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn('mx-1 my-1.5 h-px bg-[var(--text-primary)]/25', className)}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
};
