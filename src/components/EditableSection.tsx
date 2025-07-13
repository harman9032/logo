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
          <div className="space-y-4">
            {Object.keys(editContent).map((key) => (
              <div key={key}>
                <label className="block text-sm font-medium text-blue-800 mb-1">
                  {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                </label>
                {typeof editContent[key] === 'string' && editContent[key].length > 100 ? (
                  <textarea
                    value={editContent[key]}
                    onChange={(e) => setEditContent({...editContent, [key]: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    rows={4}
                  />
                ) : (
                  <input
                    type="text"
                    value={editContent[key]}
                    onChange={(e) => setEditContent({...editContent, [key]: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        children
      )}
    </div>
  );
}