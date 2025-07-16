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

  const handleSave = () => {
    onSave(id, editContent);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditContent(content);
    setIsEditing(false);
  };

  // Helper function to format field labels
  const formatLabel = (key: string) => {
    return key
      .replace(/([A-Z])/g, ' $1') // Add space before capital letters
      .replace(/^./, str => str.toUpperCase()) // Capitalize first letter
      .replace(/\d+/g, match => ` ${match}`) // Add space before numbers
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
      'rightsDescription', 'changesDescription'
    ];
    
    return textareaFields.some(field => key.toLowerCase().includes(field.toLowerCase())) || 
           (typeof value === 'string' && value.length > 100);
  };
  if (!isAdmin) {
    return <>{children}</>;
  }

  return (
    <div className="relative">
      {isAdmin && (
        <div className="absolute top-4 right-4 z-10">
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
              title={`Edit ${title}`}
            >
              <Edit3 className="h-4 w-4" />
            </button>
          ) : (
            <div className="flex space-x-2">
              <button
                onClick={handleSave}
                className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition-colors shadow-lg"
                title="Save changes"
              >
                <Save className="h-4 w-4" />
              </button>
              <button
                onClick={handleCancel}
                className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 transition-colors shadow-lg"
                title="Cancel editing"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      )}
      
      {isEditing ? (
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">Editing: {title}</h3>
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {Object.keys(editContent).map((key) => (
              <div key={key}>
                <label className="block text-sm font-medium text-blue-800 mb-1">
                  {formatLabel(key)}
                </label>
                {shouldUseTextarea(key, editContent[key]) ? (
                  <textarea
                    value={editContent[key]}
                    onChange={(e) => setEditContent({...editContent, [key]: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-vertical"
                    rows={4}
                    placeholder={`Enter ${formatLabel(key).toLowerCase()}...`}
                  />
                ) : (
                  <input
                    type="text"
                    value={editContent[key]}
                    onChange={(e) => setEditContent({...editContent, [key]: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder={`Enter ${formatLabel(key).toLowerCase()}...`}
                  />
                )}
                {key.includes('phone') && (
                  <p className="text-xs text-gray-500 mt-1">Format: +91 XXXXX XXXXX</p>
                )}
                {key.includes('email') && (
                  <p className="text-xs text-gray-500 mt-1">Format: example@domain.com</p>
                )}
                {key.includes('price') && (
                  <p className="text-xs text-gray-500 mt-1">Format: ₹X,XXX</p>
                )}
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 bg-blue-100 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Tip:</strong> Changes will be saved to the database and reflected immediately on the live site.
            </p>
          </div>
        </div>
      ) : (
        children
      )}
    </div>
  );
}