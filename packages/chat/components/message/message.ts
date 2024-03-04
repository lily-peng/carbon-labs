/**
 * @license
 *
 * Copyright IBM Corp. 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { customElement } from 'lit/decorators.js';
import { settings } from '@carbon/ai-utilities/es/settings/index.js';
import message from './src/message.js';
import { messageTemplate } from './src/message.template.js';

const { stablePrefix: c4aiPrefix } = settings;

/**
 * Constructed class functionality for the message custom element
 */
@customElement(`${c4aiPrefix}--chat-message`)
class C4AIMessage extends message {
  /**
   * Renders the template while passing in class functionality
   *
   * @returns {TemplateResult<1>}
   */
  render() {
    return messageTemplate(this);
  }
}

export default C4AIMessage;