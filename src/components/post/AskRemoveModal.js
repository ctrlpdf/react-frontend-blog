import AskModal from '../common/AskModal';

const AskRemoveModal = ({ visible, onConfirm, onCancel }) => {
  return (
    <AskModal
      visible={visible}
      title="Delete Post"
      description="Are you sure to delete this post?"
      cancelText={'Cancel'}
      confirmText={'Delete'}
      onConfirm={onConfirm}
      onCancel={onCancel}
    />
  );
};

export default AskRemoveModal;
