export default (inputId, label, placeholder, extraClasses) => {
  return `<div class="field ${extraClasses || ''}">
                <label class="field__label" for="${inputId}">${label}</label>
                <input type="text" name="fieldInput" id="${inputId}" placeholder="${placeholder}">
                <a href="#" class="field__reset">
                    <i>
                        <svg width="12" height="12">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-close"></use>
                        </svg>
                    </i>
                </a>
            </div>`;
};