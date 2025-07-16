import React, { useState } from 'react';
import { Edit3, Save, X } from 'lucide-react';

interface EditableSectionProps {
  id: string;
  title: string;
  content: any;
  onSave: (id: string, content: any) => void;
  isAdmin: boolean;
  children: React.ReactNode;
}

export default function EditableSection({ 
  id, 
  title, 
  content, 
  onSave, 
  isAdmin, 
  children 
}: EditableSectionProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(content);
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    setSaving(true);
    try {
      await onSave(id, editContent);
      setIsEditing(false);
    } catch (error) {
      console.error('Error saving:', error);
      alert('Error saving content. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    setEditContent(content);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setEditContent(content);
    setIsEditing(true);
  };

  // Helper function to format field labels
  const formatLabel = (key: string) => {
    return key
      .replace(/([A-Z])/g, ' $1') // Add space before capital letters
      .replace(/([0-9]+)/g, ' $1') // Add space before numbers
      .replace(/^./, str => str.toUpperCase()) // Capitalize first letter
      .replace(/\s+/g, ' ') // Clean up multiple spaces
      .trim();
  };

  // Helper function to determine if field should be textarea
  const shouldUseTextarea = (key: string, value: string) => {
    const textareaFields = [
      'description', 'subtitle', 'content', 'text', 'message', 
      'answer', 'testimonial', 'bonusItems', 'agreementText',
      'servicesDescription', 'paymentDescription', 'deliveryDescription',
      'revisionsDescription', 'refundDescription', 'ipDescription',
      'liabilityDescription', 'changesDescription', 'introText',
      'personalInfoDescription', 'autoInfoDescription', 'howWeUseDescription',
      'sharingDescription', 'securityDescription', 'cookiesDescription',
      'rightsDescription', 'changesDescription', 'testimonialText',
      'step1Description', 'step2Description', 'step3Description',
      'bonusDescription', 'finalCtaText', 'companyDescription'
    ];
    
    return textareaFields.some(field => key.toLowerCase().includes(field.toLowerCase())) || 
           (typeof value === 'string' && value.length > 100);
  };

  const handleFieldChange = (key: string, value: string) => {
    setEditContent(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const getFieldPlaceholder = (key: string) => {
    if (key.includes('phone')) return 'e.g., +91 98765 43210';
    if (key.includes('email')) return 'e.g., example@domain.com';
    if (key.includes('price')) return 'e.g., ₹9,999';
    if (key.includes('url') || key.includes('link')) return 'e.g., https://example.com';
    return `Enter ${formatLabel(key).toLowerCase()}...`;
  };

  const getFieldHint = (key: string) => {
    if (key.includes('phone')) return 'Format: +91 XXXXX XXXXX';
    if (key.includes('email')) return 'Format: example@domain.com';
    if (key.includes('price')) return 'Format: ₹X,XXX';
    if (key.includes('url') || key.includes('link')) return 'Include https://';
    return null;
  };

  if (!isAdmin) {
    return <>{children}</>;
  }

  return (
    <div className="relative">
      {/* Edit Controls */}
      <div className="absolute top-4 right-4 z-10">
        {!isEditing ? (
          <button
            onClick={handleEdit}
            className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors shadow-lg flex items-center"
            title={`Edit ${title}`}
          >
            <Edit3 className="h-4 w-4 mr-1" />
            <span className="text-sm">Edit</span>
          </button>
        ) : (
          <div className="flex space-x-2">
            <button
              onClick={handleSave}
              disabled={saving}
              className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition-colors shadow-lg flex items-center disabled:opacity-50"
              title="Save changes"
            >
              <Save className="h-4 w-4 mr-1" />
              <span className="text-sm">{saving ? 'Saving...' : 'Save'}</span>
            </button>
            <button
              onClick={handleCancel}
              disabled={saving}
              className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 transition-colors shadow-lg flex items-center disabled:opacity-50"
              title="Cancel editing"
            >
              <X className="h-4 w-4 mr-1" />
              <span className="text-sm">Cancel</span>
            </button>
          </div>
        )}
      </div>
      
      {/* Content Display */}
      {isEditing ? (
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-blue-900 mb-2">Editing: {title}</h3>
            <p className="text-sm text-blue-700">
              Make changes to the content below. All changes will be saved to the database.
            </p>
          </div>
          
          <div className="space-y-6 max-h-96 overflow-y-auto pr-2">
            {Object.keys(editContent).map((key) => {
              const value = editContent[key];
              
              // Skip null or undefined values
              if (value === null || value === undefined) {
                return null;
              }
              
              const label = formatLabel(key);
              const placeholder = getFieldPlaceholder(key);
              const hint = getFieldHint(key);
              const useTextarea = shouldUseTextarea(key, value);
              
              return (
                <div key={key} className="bg-white p-4 rounded-lg border border-gray-200">
                  <label className="block text-sm font-semibold text-gray-800 mb-2">
                    {label}
                    <span className="text-xs text-gray-500 ml-2">({key})</span>
                  </label>
                  
                  {useTextarea ? (
                    <textarea
                      value={String(value || '')}
                      onChange={(e) => handleFieldChange(key, e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-vertical transition-colors"
                      rows={4}
                      placeholder={placeholder}
                    />
                  ) : (
                    <input
                      type="text"
                      value={String(value || '')}
                      onChange={(e) => handleFieldChange(key, e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder={placeholder}
                    />
                  )}
                  
                  {hint && (
                    <p className="text-xs text-gray-500 mt-1 flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                      {hint}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
          
          <div className="mt-6 p-4 bg-blue-100 rounded-lg border border-blue-200">
            <div className="flex items-start">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                <span className="text-white text-xs font-bold">i</span>
              </div>
              <div>
                <p className="text-sm text-blue-800 font-medium mb-1">
                  <strong>Editing Tips:</strong>
                </p>
                <ul className="text-xs text-blue-700 space-y-1">
                  <li>• Changes are saved to the database and reflected immediately</li>
                  <li>• Use clear, concise language for better user experience</li>
                  <li>• Test your changes on different screen sizes</li>
                  <li>• Keep important information above the fold</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative">
          {children}
          {/* Subtle edit indicator */}
          <div className="absolute top-2 left-2 opacity-20 hover:opacity-60 transition-opacity">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          </div>
        </div>
      )}
    </div>
  );
}