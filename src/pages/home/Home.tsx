import { Button } from '../../components/button/Button';
import { StyledButton } from '../../components/button/StyledButton';
import { heartIcon } from '../../components/icon/heart';
import { Icon } from '../../components/icon/Icon';
import { TextInput } from '../../components/input/Input';
import { SectionWrapper } from '../../components/section-wrapper/SectionWrapper';
import styles from './Home.module.css';

export const HomePage = () => {
  return (
    <SectionWrapper className={styles.homeWrapper}>
      <StyledButton label="Add to favorites">
        <Icon path={heartIcon} size="medium" />
      </StyledButton>
      <Button label="Add to favorites">
        <Icon path={heartIcon} size="medium" />
      </Button>
      <StyledButton label="Delete" variant="danger" />
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
