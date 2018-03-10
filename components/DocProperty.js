import PropTypes from 'prop-types';
import { Box, Button, Heading, Markdown, Text } from 'grommet';
import { Reactjs, Close } from 'grommet-icons';
import jsxToString from 'jsx-to-string';

export default class DocProperty extends React.Component {
  static defaultProps = {
    examples: undefined,
  }

  static propTypes = {
    property: PropTypes.object.isRequired,
    examples: PropTypes.object,
  }
  state = { codeMode: false };
  render() {
    const { property, examples } = this.props;
    const { codeMode } = this.state;
    let example;
    if (examples) {
      const markDown = codeMode ? (
        <Markdown>{`\`\`${jsxToString(examples)}\`\``}
        </Markdown>
      ) : null;
      example = (
        <Box flex={true} align='end' margin={{ vertical: 'medium' }}>
          <Button
            plain={true}
            icon={codeMode ? <Close /> : <Reactjs color='plain' />}
            onClick={() => this.setState({ codeMode: !codeMode })}
          />
          {markDown}
          {examples}
        </Box>
      );
    }
    let defaultValue;
    if (property.defaultValue) {
      defaultValue = ` (${property.defaultValue})`;
    }
    return (
      <Box
        key={property.name}
        direction='row-responsive'
        justify='between'
        align='start'
        border='bottom'
      >
        <Box basis='1/2' margin={{ right: 'large' }}>
          <Heading level={3} size='small'>
            <strong>{`${property.name}${property.required ? ' *' : ''}`}</strong>
          </Heading>
          <Markdown>{`\`\`${property.description}\`\``}</Markdown>
        </Box>
        <Box flex={true} align='start'>
          <Text><pre>{property.format}{defaultValue}</pre></Text>

        </Box>
        {example}
      </Box>
    );
  }
}