import React from 'react';
import styled from 'styled-components';
import ReCAPTCHA from 'react-google-recaptcha';

import mailIcon from 'assets/windowsIcons/mail.png';

function lineBreak(str) {
  return str.split('\n').map((s, i) => (
    <p key={i} className="error__message">
      {s}
    </p>
  ));
}

function Email({
  onClose,
  message = 'Please complete the recaptcha to email me',
}) {
  function complete_recaptcha(key) {
    if (key === null) {
      return;
    }

    let formData = new FormData();
    formData.append('token', key);
    fetch('https://thomasm.dev/email.php', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(result => {
        if (result['status'] === 'success') {
          window.location =
            'mailto:' + result['message'] + '&body=%0A%0A%E2%9C%89%EF%B8%8F';
        }
        onClose();
      });
  }

  return (
    <Div>
      <div className="error__top">
        <img src={mailIcon} alt="error" className="error__img" />
        <div className="error__messages">
          {lineBreak(message)}
          <ReCAPTCHA
            sitekey="6LcBL6oZAAAAACNmhQh8jwrYqJEC6pT6NkchZFMV"
            onChange={complete_recaptcha}
          />
        </div>
      </div>
      <div className="error__bottom">
        <div onClick={onClose} className="error__button">
          <span className="error__confirm">CANCEL</span>
        </div>
      </div>
    </Div>
  );
}

const Div = styled.div`
  background-color: #f5f5f5;
  width: 100%;
  height: 100%;
  font-size: 11px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  .error__top {
    display: flex;
    flex: 1;
  }
  .error__img {
    width: 30px;
    height: 30px;
  }
  .error__messages {
    padding: 2px 20px 12px;
  }
  .error__message {
    line-height: 16px;
  }
  .error__bottom {
    display: flex;
    width: 100%;
    justify-content: center;
  }
  .error__button {
    width: 80px;
    height: 22px;
    display: flex;
    border: 1px solid black;
    justify-content: center;
    align-items: center;
    box-shadow: inset -1px -1px 1px black;
    &:hover:active {
      box-shadow: inset 1px 1px 1px black;
      & > * {
        transform: translate(1px, 1px);
      }
    }
  }
  .error__confirm {
    line-height: 11px;
  }
`;

export default Email;
