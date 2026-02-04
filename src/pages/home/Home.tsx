import { Button } from '../../components/common/button/Button';
import { StyledButton } from '../../components/common/button/StyledButton';
import { heartIcon } from '../../components/common/icon/heart';
import { Icon } from '../../components/common/icon/Icon';
import { ExternalLink } from '../../components/common/link/ExternalLink';
import { TextInput } from '../../components/common/input/Input';
import { SectionWrapper } from '../../components/common/section-wrapper/SectionWrapper';
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
        Text with a <ExternalLink href="#">link example</ExternalLink>.
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
