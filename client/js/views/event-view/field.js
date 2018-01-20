export default (inputId, label, inputPlaceholder, inputExtraClass, inputValue, isDate) => {
  const filledClass = (inputValue !== null) ? ' filled' : '';
  const extraClass = (inputExtraClass !== null) ?  ' ' + inputExtraClass : '';
  const placeholder = (inputPlaceholder !== null) ? inputPlaceholder : '';

  return `<div class="field${extraClass}${filledClass}" id="${(isDate) ? 'date' : ''}">
                <label class="field__label" for="${inputId}">${label}</label>
                <input type="text" 
                  name="fieldInput" 
                  id="${inputId}" 
                  placeholder="${placeholder}"
                  value="${inputValue || ''}"
                  ${(isDate) ? 'data-input' : ''}
                  >
                  
                <a href="#" class="field__reset">
                    <i>
                        <svg width="12" height="12">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-close"></use>
                        </svg>
                    </i>
                </a>
                
                ${(isDate) ? '<button class="field__trigger" id="dateTrigger" data-toggle></button>' : ''}
            </div>`;
};