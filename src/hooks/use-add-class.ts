import { useEffect } from 'react';

export type UseTkAttributeClassOptions = {
  /**
   * Tên attribute cần target (ví dụ: "data-customvalue")
   */
  attribute: string;
  /**
   * Giá trị attribute cần match (nếu không truyền sẽ chọn toàn bộ phần tử có attribute đó)
   */
  value?: string | string[];
  /**
   * Class hoặc danh sách class sẽ thêm vào
   */
  classNames: string | string[];
  /**
   * Root element để query (mặc định là document)
   */
  rootElement?: HTMLElement | Document | null;
};

/**
 * Hook để thêm class vào các element theo attribute và value cụ thể.
 */
export function useTkAttributeClass({
  attribute,
  value,
  classNames,
  rootElement = document,
}: UseTkAttributeClassOptions) {
  useEffect(() => {
    if (!attribute || !classNames || !rootElement) return;

    const classList = Array.isArray(classNames) ? classNames : [classNames];
    const values = Array.isArray(value) ? value : value ? [value] : [];

    const selector = values.length
      ? values.map((val) => `[${attribute}="${val}"]`).join(', ')
      : `[${attribute}]`;

    const elements = rootElement.querySelectorAll<HTMLElement>(selector);

    elements.forEach((el) => {
      classList.forEach((cls) => el.classList.add(cls));
    });

    return () => {
      elements.forEach((el) => {
        classList.forEach((cls) => el.classList.remove(cls));
      });
    };
  }, [attribute, value, classNames, rootElement]);
}
