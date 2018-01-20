import field from './field'

export default (fieldProps) => {
  return `<div class="field-autocomplete" data-autocomplete>
            ${field(fieldProps)}
            
            <i class="field-autocomplete__arrow">
              <svg width="12" height="12">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-arrow"></use>
              </svg>
            </i>
            
            <div class="field-autocomplete__dropdown"></div>
          </div>`;
};