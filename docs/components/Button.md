# Button Component

## Overview
A versatile button component that provides consistent styling and behavior across the application. Supports multiple variants, sizes, and states while maintaining accessibility standards.

## Props/Parameters
| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| children | ReactNode | Yes | - | Button content (text, icons, etc.) |
| variant | 'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'danger' | No | 'primary' | Visual style variant |
| size | 'sm' \| 'md' \| 'lg' \| 'xl' | No | 'md' | Button size |
| disabled | boolean | No | false | Whether the button is disabled |
| loading | boolean | No | false | Shows loading spinner and disables interaction |
| fullWidth | boolean | No | false | Makes button take full width of container |
| leftIcon | ReactNode | No | - | Icon to display on the left side |
| rightIcon | ReactNode | No | - | Icon to display on the right side |
| onClick | (event: MouseEvent) => void | No | - | Click event handler |
| type | 'button' \| 'submit' \| 'reset' | No | 'button' | HTML button type |
| className | string | No | - | Additional CSS classes |
| id | string | No | - | HTML id attribute |
| ariaLabel | string | No | - | Accessibility label for screen readers |

## Usage Examples

### Basic Usage
```tsx
import { Button } from '@/components/Button';

// Simple button
<Button>Click me</Button>

// Primary action button
<Button variant="primary" onClick={handleSubmit}>
  Submit Form
</Button>
```

### Different Variants
```tsx
// Primary button (default)
<Button variant="primary">Primary Action</Button>

// Secondary button
<Button variant="secondary">Secondary Action</Button>

// Outline button
<Button variant="outline">Outline Button</Button>

// Ghost button
<Button variant="ghost">Ghost Button</Button>

// Danger button
<Button variant="danger">Delete Item</Button>
```

### Different Sizes
```tsx
<Button size="sm">Small Button</Button>
<Button size="md">Medium Button</Button>
<Button size="lg">Large Button</Button>
<Button size="xl">Extra Large Button</Button>
```

### With Icons
```tsx
import { Plus, Download, ArrowRight } from 'lucide-react';

// Left icon
<Button leftIcon={<Plus />}>Add Item</Button>

// Right icon
<Button rightIcon={<Download />}>Download</Button>

// Both icons
<Button 
  leftIcon={<Plus />} 
  rightIcon={<ArrowRight />}
>
  Create and Continue
</Button>
```

### Loading State
```tsx
<Button loading onClick={handleAsyncAction}>
  {loading ? 'Saving...' : 'Save Changes'}
</Button>
```

### Full Width
```tsx
<Button fullWidth variant="primary">
  Full Width Button
</Button>
```

### Form Integration
```tsx
<form onSubmit={handleSubmit}>
  <Button type="submit" variant="primary">
    Submit Form
  </Button>
  <Button type="reset" variant="outline">
    Reset Form
  </Button>
</form>
```

## Variants/States

### Visual Variants
- **Primary**: Main call-to-action buttons (blue gradient background)
- **Secondary**: Secondary actions (gray background)
- **Outline**: Subtle actions (transparent background with border)
- **Ghost**: Minimal actions (transparent background, no border)
- **Danger**: Destructive actions (red background)

### Interactive States
- **Default**: Normal interactive state
- **Hover**: Enhanced visual feedback on mouse over
- **Active**: Pressed/clicked state
- **Disabled**: Non-interactive state with reduced opacity
- **Loading**: Shows spinner, prevents interaction
- **Focus**: Keyboard focus with visible outline

## Accessibility

### ARIA Attributes
- `aria-label`: Custom label for screen readers when button text isn't descriptive
- `aria-disabled`: Properly indicates disabled state
- `aria-busy`: Indicates loading state to assistive technologies

### Keyboard Navigation
- **Tab**: Navigate to button
- **Enter/Space**: Activate button
- **Escape**: Remove focus (when appropriate)

### Screen Reader Support
- Button text is announced by screen readers
- Loading state is announced when `loading` prop changes
- Disabled state is properly communicated
- Icon-only buttons require `ariaLabel` prop

### Color Contrast
- All variants meet WCAG AA contrast requirements (4.5:1 minimum)
- Focus indicators have sufficient contrast
- Disabled state maintains readable contrast

## Edge Cases

### Empty/Null Content
```tsx
// Gracefully handles empty children
<Button>{null}</Button>
<Button>{undefined}</Button>
<Button></Button>
```

### Long Text Content
```tsx
// Text wraps appropriately
<Button>This is a very long button text that might wrap to multiple lines</Button>
```

### Icon-Only Buttons
```tsx
// Requires aria-label for accessibility
<Button leftIcon={<Plus />} ariaLabel="Add new item" />
```

### Rapid Clicking
- Button prevents double-submission during loading state
- Click handlers are debounced internally
- Visual feedback prevents user confusion

### Network Failures
```tsx
// Handle async operations gracefully
const handleSave = async () => {
  setLoading(true);
  try {
    await saveData();
  } catch (error) {
    // Handle error
  } finally {
    setLoading(false);
  }
};
```

## Dependencies

### External Libraries
- `lucide-react`: For default loading spinner icon
- `clsx`: For conditional CSS class management

### Internal Dependencies
- `@/utils/cn`: Utility for merging CSS classes
- `@/hooks/useDebounce`: For preventing rapid clicks

## Browser Support
- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile**: iOS Safari 14+, Chrome Mobile 90+
- **Known Limitations**: None

## Performance Considerations

### Rendering Performance
- Component is memoized with `React.memo`
- Icon props should be memoized to prevent unnecessary re-renders
- Click handlers should be memoized with `useCallback`

### Bundle Size
- Tree-shakeable imports for icons
- CSS-in-JS avoided in favor of Tailwind classes
- No heavy dependencies

### Optimization Tips
```tsx
// ✅ Good: Memoized handler
const handleClick = useCallback(() => {
  // handler logic
}, [dependencies]);

// ✅ Good: Memoized icon
const icon = useMemo(() => <Plus />, []);

// ❌ Avoid: Inline handlers and icons
<Button onClick={() => doSomething()} leftIcon={<Plus />} />
```

## Testing

### Unit Tests
- [ ] Renders with default props
- [ ] Applies correct variant classes
- [ ] Handles click events
- [ ] Shows loading state correctly
- [ ] Respects disabled state
- [ ] Renders icons properly
- [ ] Applies custom className

### Integration Tests
- [ ] Works within forms
- [ ] Integrates with routing
- [ ] Handles async operations
- [ ] Keyboard navigation works

### Manual Testing Checklist
- [ ] Visual appearance matches design
- [ ] Hover states work correctly
- [ ] Focus indicators are visible
- [ ] Screen reader announces content
- [ ] Loading spinner appears/disappears
- [ ] Disabled state prevents interaction

## Related Components
- **IconButton**: For icon-only buttons with consistent styling
- **LinkButton**: For buttons that navigate (uses Next.js Link)
- **FloatingActionButton**: For primary actions in mobile interfaces
- **ButtonGroup**: For grouping related buttons

### When to Use Alternatives
- Use `IconButton` for toolbar actions or compact interfaces
- Use `LinkButton` for navigation that should be crawlable
- Use native `<button>` for simple cases without styling needs

## Changelog

### v2.1.0 (Current)
- Added `loading` prop with spinner
- Improved accessibility with better ARIA support
- Added `fullWidth` prop
- Performance optimizations with React.memo

### v2.0.0
- **Breaking**: Renamed `color` prop to `variant`
- **Breaking**: Removed `outline` boolean prop in favor of `variant="outline"`
- Added `ghost` variant
- Improved TypeScript definitions

### v1.2.0
- Added icon support with `leftIcon` and `rightIcon`
- Added size variants
- Improved focus management

### v1.1.0
- Added `disabled` prop
- Improved hover and active states
- Added basic accessibility features

### v1.0.0
- Initial release with basic button functionality
- Primary and secondary variants
- Click handling

## Migration Guide

### From v1.x to v2.0
```tsx
// Old (v1.x)
<Button color="primary" outline>Button</Button>

// New (v2.0+)
<Button variant="outline">Button</Button>
```

### From v2.0 to v2.1
No breaking changes. New features are additive and backward compatible.