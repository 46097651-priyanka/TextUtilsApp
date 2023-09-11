import { useDispatch, useSelector } from "react-redux";
import { textActions } from '../store/themes/text/textSlice';
import Button from "./buttons/Button";

export default function TextForm(props) {

    const textState = useSelector((state) => state.text);
    const themeState = useSelector((state) => state.theme);
    const dispatch = useDispatch();
    /**
     * Converts the text to uppercase
     */
    const handleUpClick = () => {
      dispatch(textActions.upperCase());
    };
  
    /**
     * Converts the text to lowercase
     */
    const handleLowClick = () => {
      dispatch(textActions.lowerCase());
    };
  
    /**
     * Clears the text
     */
    const handleClearClick = () => {
      if (!window.confirm('Do you want to delete the text')) return;
      dispatch(textActions.clear());
    };
  
    
    /**
     * Removes white space from the text
     */
    const handleRemoveWhiteSpaceClick = () => {
      dispatch(textActions.removeWhiteSpace());
    };

    const handleOnChange = (event) =>
      dispatch(textActions.updateText({ text: event.target.value }));
    
      const availableActions = [
      {
        label: 'Convert to uppercase',
        handleOnClick: handleUpClick,
        disabled: textState.text.length === 0,
      },
      {
        label: 'Convert to lowercase',
        handleOnClick: handleLowClick,
        disabled: textState.text.length === 0,
      },
      {
        label: 'Clear Text',
        handleOnClick: handleClearClick,
        disabled: textState.text.length === 0,
      },
      {
        label: 'Remove white space',
        handleOnClick: handleRemoveWhiteSpaceClick,
        disabled: textState.text.length === 0,
      }
    ];
  
    return (
      <>
        <div
          className="container"
          style={{
            color: themeState.color,
          }}
        >
          <h1 className="mb-2">Enter The Text To Analyze Below</h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              id="myBox"
              rows="8"
              value={textState.text}
              onChange={handleOnChange}
              style={{
                backgroundColor: themeState.backgroundColor,
                color: themeState.color,
              }}
            ></textarea>
          </div>
          {availableActions.map((action) => {
            const supported = action?.supported;
            if (supported === false) {
              return;
            }
            return <Button key={action.label} action={action} />;
          })}
        </div>
        <div className="container my-3" style={{color: themeState.color}}>
          <h2>Your Text Summary</h2>
          <p>
            <b>
              {
                textState.text
                  .replace(/\s/)
                  .split(' ')
                  .filter((value) => value !== '').length
              }
            </b>{' '}
            words,
            <b> {textState.text.trim().length}</b> characters,
            <b>
              {' '}
              {
                textState.text
                  .replace(/\n/g, '.')
                  .split('.')
                  .filter((value) => value !== '').length
              }
            </b>{' '}
            statements,
            <b> {textState.text.split('?').length - 1}</b> questions,{' '}
            <b>{textState.text.split('!').length - 1}</b> exclamations.
          </p>
          <p>
            {0.08 *
              textState.text.split(' ').filter((element) => {
                return element.length !== 0;
              }).length}{' '}
            Minutes read
          </p>
          <h2>Preview</h2>
          <p>
            {textState.text.length > 0 ? textState.text : 'Nothing to preview!!'}
          </p>
        </div>
      </>
    );
  }
  