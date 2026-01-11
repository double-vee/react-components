import { TextInput } from '../../components/input/Input';
import { SectionWrapper } from '../../components/section-wrapper/SectionWrapper';
import styles from './Home.module.css';

export const HomePage = () => {
  return (
    <SectionWrapper className={styles.homeWrapper}>
      <button>Button example</button>
      <p>
        Text with a <a href="#">link example</a>.
      </p>
      <form>
        <TextInput
          id="textInput"
          label="Text input"
          name="textInput"
          placeholder="Your input example"
          type="text"
        />
      </form>
    </SectionWrapper>
  );
};
