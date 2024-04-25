import { Dialog } from '@headlessui/react';

function SuccessModal({ isOpen, onClose }) {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />

      <Dialog.Content className="flex items-center justify-center h-full">
        <div className="bg-white p-6 rounded-md">
          <Dialog.Title as="h3" className="text-lg font-medium mb-4">
            Success!
          </Dialog.Title>
          <p>Your login was successful.</p>
          <button className="mt-4 text-blue-500" onClick={onClose}>
            Close
          </button>
        </div>
      </Dialog.Content>
    </Dialog>
  );
}

export default SuccessModal;
