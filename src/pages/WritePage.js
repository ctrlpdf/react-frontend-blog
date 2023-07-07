import Editor from '../components/write/Editor';
import TagBox from '../components/write/TagBox';
import Responsive from '../components/common/Responsive';

function WritePage() {
  return (
    <Responsive>
      <Editor />
      <TagBox />
    </Responsive>
  );
}

export default WritePage;
