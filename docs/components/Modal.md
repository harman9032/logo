# Modal Component

## Overview
A flexible modal dialog component that provides a consistent overlay interface for displaying content above the main application. Supports various sizes, animations, and accessibility features including focus management and keyboard navigation.

## Props/Parameters
| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| isOpen | boolean | Yes | - | Controls modal visibility |
| onClose | () => void | Yes | - | Callback when modal should close |
| children | ReactNode | Yes | - | Modal content |
| title | string | No | - | Modal title (displayed in header) |
| size | 'sm' \| 'md' \| 'lg' \| 'xl' \| 'full' | No | 'md' | Modal size |
| closeOnOverlayClick | boolean | No | true | Whether clicking overlay closes modal |
| closeOnEscape | boolean | No | true | Whether pressing Escape closes modal |
| showCloseButton | boolean | No | true | Whether to show X button in header |
| preventScroll | boolean | No | true | Prevents body scroll when modal is open |
| className | string | No | - | Additional CSS classes for modal content |
| overlayClassName | string | No | - | Additional CSS classes for overlay |
| initialFocus | RefObject<HTMLElement> | No | - | Element to focus when modal opens |
| finalFocus | RefObject<HTMLElement> | No | - | Element to focus when modal closes |
| role | 'dialog' \| 'alertdialog' | No | 'dialog' | ARIA role for the modal |
| ariaLabel | string | No | - | Accessibility label when no title provided |
| ariaDescribedBy | string | No | - | ID of element that describes modal content |

## Usage Examples

### Basic Modal
```tsx
import { Modal } from '@/components/Modal';
import { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <p>This is a basic modal content.</p>
      </Modal>
    </>
  );
}
```

### Modal with Title and Actions
```tsx
<Modal 
  isOpen={isOpen} 
  onClose={handleClose}
  title="Confirm Action"
>
  <div className="space-y-4">
    <p>Are you sure you want to delete this item?</p>
    <div className="flex justify-end space-x-2">
      <Button variant="outline" onClick={handleClose}>
        Cancel
      </Button>
      <Button variant="danger" onClick={handleDelete}>
        Delete
      </Button>
    </div>
  </div>
</Modal>
```

### Different Sizes
```tsx
// Small modal
<Modal size="sm" isOpen={isOpen} onClose={handleClose}>
  <p>Small modal content</p>
</Modal>

// Large modal
<Modal size="lg" isOpen={isOpen} onClose={handleClose}>
  <div>Large modal with more content</div>
</Modal>

// Full screen modal
<Modal size="full" isOpen={isOpen} onClose={handleClose}>
  <div>Full screen modal content</div>
</Modal>
```

### Form Modal with Focus Management
```tsx
function EditUserModal({ user, isOpen, onClose, onSave }) {
  const nameInputRef = useRef<HTMLInputElement>(null);

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose}
      title="Edit User"
      initialFocus={nameInputRef}
    >
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <label htmlFor="name">Name</label>
            <input
              ref={nameInputRef}
              id="name"
              type="text"
              defaultValue={user.name}
            />
          </div>
          <div className="flex justify-end space-x-2">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              Save Changes
            </Button>
          </div>
        </div>
      </form>
    </Modal>
  );
}
```

### Alert Dialog
```tsx
<Modal 
  isOpen={isOpen} 
  onClose={handleClose}
  role="alertdialog"
  title="Error"
  closeOnOverlayClick={false}
  closeOnEscape={false}
>
  <div className="space-y-4">
    <p>An error occurred while processing your request.</p>
    <Button onClick={handleClose} fullWidth>
      OK
    </Button>
  </div>
</Modal>
```

### Custom Styling
```tsx
<Modal 
  isOpen={isOpen} 
  onClose={handleClose}
  className="bg-gradient-to-br from-blue-50 to-purple-50"
  overlayClassName="bg-black/80"
>
  <div>Custom styled modal</div>
</Modal>
```

## Variants/States

### Sizes
- **sm**: 400px max width - for simple confirmations
- **md**: 600px max width - default size for most content
- **lg**: 800px max width - for complex forms or detailed content
- **xl**: 1000px max width - for data tables or rich content
- **full**: Full screen - for immersive experiences

### Animation States
- **Entering**: Fade in with scale animation
- **Open**: Fully visible and interactive
- **Exiting**: Fade out with scale animation
- **Closed**: Hidden from DOM

## Accessibility

### ARIA Attributes
- `role="dialog"` or `role="alertdialog"` for proper semantics
- `aria-modal="true"` to indicate modal behavior
- `aria-labelledby` connects to title element
- `aria-describedby` connects to description content
- `aria-hidden` properly manages content visibility

### Focus Management
- **Initial Focus**: Automatically focuses first interactive element or specified element
- **Focus Trap**: Keeps focus within modal while open
- **Focus Return**: Returns focus to trigger element when closed
- **Tab Navigation**: Cycles through modal content only

### Keyboard Navigation
- **Escape**: Closes modal (unless disabled)
- **Tab**: Moves to next focusable element within modal
- **Shift+Tab**: Moves to previous focusable element within modal

### Screen Reader Support
- Modal content is announced when opened
- Background content is hidden from screen readers
- Proper heading structure maintained
- Loading states are announced

## Edge Cases

### Nested Modals
```tsx
// Supports modal stacking with proper z-index management
<Modal isOpen={firstModalOpen} onClose={closeFirst}>
  <div>
    <p>First modal content</p>
    <Button onClick={() => setSecondModalOpen(true)}>
      Open Second Modal
    </Button>
  </div>
  
  <Modal isOpen={secondModalOpen} onClose={closeSecond}>
    <p>Second modal content</p>
  </Modal>
</Modal>
```

### Long Content with Scrolling
```tsx
<Modal isOpen={isOpen} onClose={handleClose} size="lg">
  <div className="max-h-96 overflow-y-auto">
    {/* Long content that scrolls within modal */}
    <div className="space-y-4">
      {longContentArray.map(item => (
        <div key={item.id}>{item.content}</div>
      ))}
    </div>
  </div>
</Modal>
```

### Mobile Responsiveness
- Automatically adjusts to smaller screens
- Full-width on mobile devices
- Touch-friendly close gestures
- Proper viewport handling

### Rapid Open/Close
- Prevents animation conflicts
- Handles state changes during transitions
- Maintains focus management integrity

### Network Loading States
```tsx
function DataModal({ isOpen, onClose }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (isOpen) {
      fetchData().then(setData).finally(() => setLoading(false));
    }
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Data Details">
      {loading ? (
        <div className="flex justify-center p-8">
          <Spinner />
        </div>
      ) : (
        <div>{/* Render data */}</div>
      )}
    </Modal>
  );
}
```

## Dependencies

### External Libraries
- `@headlessui/react`: For accessibility and focus management
- `framer-motion`: For smooth animations (optional)
- `react-focus-lock`: For focus trapping

### Internal Dependencies
- `@/hooks/useKeyPress`: For keyboard event handling
- `@/hooks/useBodyScrollLock`: For preventing background scroll
- `@/utils/cn`: For CSS class management

## Browser Support
- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile**: iOS Safari 14+, Chrome Mobile 90+
- **Known Limitations**: 
  - Backdrop blur requires modern browser support
  - Some animation features may be reduced on older devices

## Performance Considerations

### Rendering Performance
- Modal content is conditionally rendered (not just hidden)
- Portal rendering prevents unnecessary parent re-renders
- Animation optimizations with `transform` and `opacity`

### Memory Management
- Properly cleans up event listeners
- Removes portal content when closed
- Manages focus restoration

### Optimization Tips
```tsx
// ✅ Good: Conditional rendering
{isModalOpen && (
  <Modal isOpen={isModalOpen} onClose={closeModal}>
    <ExpensiveComponent />
  </Modal>
)}

// ✅ Good: Memoized content
const modalContent = useMemo(() => (
  <ComplexModalContent data={data} />
), [data]);

// ❌ Avoid: Always rendering hidden modal
<Modal isOpen={isModalOpen} onClose={closeModal}>
  <ExpensiveComponent />
</Modal>
```

## Testing

### Unit Tests
- [ ] Renders when isOpen is true
- [ ] Hides when isOpen is false
- [ ] Calls onClose when overlay clicked
- [ ] Calls onClose when Escape pressed
- [ ] Applies correct size classes
- [ ] Manages focus correctly
- [ ] Prevents body scroll when open

### Integration Tests
- [ ] Works with form submissions
- [ ] Handles nested modals correctly
- [ ] Integrates with routing
- [ ] Maintains accessibility standards

### Manual Testing Checklist
- [ ] Keyboard navigation works
- [ ] Screen reader announces content
- [ ] Focus management is correct
- [ ] Animations are smooth
- [ ] Mobile experience is good
- [ ] Works with different content types

## Related Components
- **Drawer**: For slide-in panels from screen edges
- **Popover**: For small contextual overlays
- **Tooltip**: For brief informational overlays
- **ConfirmDialog**: Specialized modal for confirmations

### When to Use Alternatives
- Use `Drawer` for navigation or secondary content
- Use `Popover` for contextual actions or information
- Use `Tooltip` for brief help text
- Use `ConfirmDialog` for simple yes/no confirmations

## Changelog

### v3.1.0 (Current)
- Added support for nested modals
- Improved mobile responsiveness
- Added custom animation support
- Better TypeScript definitions

### v3.0.0
- **Breaking**: Removed deprecated `visible` prop (use `isOpen`)
- **Breaking**: Changed focus management API
- Added `initialFocus` and `finalFocus` props
- Improved accessibility compliance
- Added support for alert dialogs

### v2.2.0
- Added size variants
- Improved animation performance
- Added `preventScroll` prop
- Better keyboard handling

### v2.1.0
- Added custom styling props
- Improved focus management
- Added overlay click configuration
- Better mobile support

### v2.0.0
- Complete rewrite with modern React patterns
- Added proper accessibility features
- Improved animation system
- Better TypeScript support

## Migration Guide

### From v2.x to v3.0
```tsx
// Old (v2.x)
<Modal visible={isOpen} onCancel={handleClose}>
  Content
</Modal>

// New (v3.0+)
<Modal isOpen={isOpen} onClose={handleClose}>
  Content
</Modal>
```

### Focus Management Changes
```tsx
// Old (v2.x)
<Modal autoFocus={false} restoreFocus={customElement}>

// New (v3.0+)
<Modal 
  initialFocus={customInitialRef} 
  finalFocus={customFinalRef}
>
```