/**
 * @license
 *
 * Copyright IBM Corp. 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';
import { settings } from '@carbon-labs/utilities/es/settings/index.js';
const { stablePrefix: clabsPrefix } = settings;

import '@carbon/web-components/es/components/tooltip/index.js';

/**
 * Lit template for card
 *
 * @param {object} customElementClass Class functionality for the custom element
 * @returns {TemplateResult<1>} Lit html template
 */
export function tagElementTemplate(customElementClass) {
  const {
    text: text,
    color: color,
    tooltipPosition: tooltipPosition,
    tooltipText: tooltipText,
    _handleClick: handleClick,
  } = customElementClass;

  return html` <div class="${clabsPrefix}--chat-tag">
    <div class="${clabsPrefix}--chat-tag-container">
      <cds-tooltip align="${tooltipPosition}">
        <button
          class="tag sb-tooltip-trigger"
          .color=${color}
          .tooltipPosition=${tooltipPosition}
          @click="${handleClick}">
          <slot>${text}</slot>
        </button>
        <cds-tooltip-content id="content"> ${tooltipText} </cds-tooltip-content>
      </cds-tooltip>
    </div>
  </div>`;
}

//      <div class="tooltip">Default tooltip text.</div>
