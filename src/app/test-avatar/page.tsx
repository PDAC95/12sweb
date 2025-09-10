'use client';

import { HexagonAvatar } from '@/components/ui/HexagonAvatar';

export default function TestAvatarPage() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">HexagonAvatar Test Page</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">
          
          {/* Small Size */}
          <div className="text-center">
            <h2 className="text-lg font-semibold mb-4">Small</h2>
            <HexagonAvatar
              src="https://i.pravatar.cc/150?img=3"
              size="small"
              className="mx-auto"
            />
          </div>

          {/* Medium Size */}
          <div className="text-center">
            <h2 className="text-lg font-semibold mb-4">Medium</h2>
            <HexagonAvatar
              src="https://i.pravatar.cc/150?img=3"
              size="medium"
              className="mx-auto"
            />
          </div>

          {/* Large Size */}
          <div className="text-center">
            <h2 className="text-lg font-semibold mb-4">Large</h2>
            <HexagonAvatar
              src="https://i.pravatar.cc/150?img=3"
              size="large"
              className="mx-auto"
            />
          </div>

        </div>

        {/* Test with different images */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">Different Images Test</h2>
          <div className="flex justify-center gap-8 flex-wrap">
            <div className="text-center">
              <p className="mb-2">Image 1</p>
              <HexagonAvatar
                src="https://i.pravatar.cc/150?img=1"
                size="medium"
              />
            </div>
            <div className="text-center">
              <p className="mb-2">Image 5</p>
              <HexagonAvatar
                src="https://i.pravatar.cc/150?img=5"
                size="medium"
              />
            </div>
            <div className="text-center">
              <p className="mb-2">Image 8</p>
              <HexagonAvatar
                src="https://i.pravatar.cc/150?img=8"
                size="medium"
              />
            </div>
            <div className="text-center">
              <p className="mb-2">Image 12</p>
              <HexagonAvatar
                src="https://i.pravatar.cc/150?img=12"
                size="medium"
              />
            </div>
          </div>
        </div>

        {/* Test with different border colors */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">Border Colors Test</h2>
          <div className="flex justify-center gap-8 flex-wrap">
            <div className="text-center">
              <p className="mb-2">Default Green</p>
              <HexagonAvatar
                src="https://i.pravatar.cc/150?img=3"
                size="medium"
              />
            </div>
            <div className="text-center">
              <p className="mb-2">Blue</p>
              <HexagonAvatar
                src="https://i.pravatar.cc/150?img=3"
                size="medium"
                borderColor="#3B82F6"
              />
            </div>
            <div className="text-center">
              <p className="mb-2">Red</p>
              <HexagonAvatar
                src="https://i.pravatar.cc/150?img=3"
                size="medium"
                borderColor="#EF4444"
              />
            </div>
            <div className="text-center">
              <p className="mb-2">Purple</p>
              <HexagonAvatar
                src="https://i.pravatar.cc/150?img=3"
                size="medium"
                borderColor="#8B5CF6"
              />
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-12 p-6 bg-gray-100 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Debug Instructions</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Check for any black artifacts or image overflow outside hexagon boundaries</li>
            <li>Verify that images are properly clipped to the hexagon shape</li>
            <li>Test hover effects on each avatar</li>
            <li>Ensure all sizes render correctly</li>
            <li>Check that different images maintain proper aspect ratio and centering</li>
          </ul>
        </div>

      </div>
    </div>
  );
}