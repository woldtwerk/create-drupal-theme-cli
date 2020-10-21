export {};
declare global {
  interface NodeList {
    once(key?: string): Array<HTMLElement>;
    removeOnce(key?: string): Array<HTMLElement>;
    findOnce(key?: string): Array<HTMLElement>;
  }
}

const capitalizeFirstChar = (inputString: string): string =>
  inputString.charAt(0).toUpperCase() + inputString.slice(1).toLowerCase();

const nodeListToArray = (nodeList: NodeList): Array<HTMLElement> =>
  Array.prototype.slice.call(nodeList);

const isOnced = (htmlElement: HTMLElement, id: string): boolean =>
  !!htmlElement.dataset[`tsOnce${id}`];

const defaultKey = 'once';
const prefix = 'tsOnce';

const removeDataSetFromNodeList = (
  id: string,
  nodeList: NodeList,
): Array<HTMLElement> =>
  nodeListToArray(nodeList)
    .filter((htmlElement) => isOnced(htmlElement, id))
    .map((htmlElement) => {
      delete htmlElement.dataset[`${prefix}${id}`];
      return htmlElement;
    });

const addDataSetToNodeList = (
  id: string,
  nodeList: NodeList,
): Array<HTMLElement> =>
  nodeListToArray(nodeList).map((htmlElement) => {
    if (!isOnced(htmlElement, id)) {
      htmlElement.dataset[`${prefix}${id}`] = '';
    }
    return htmlElement;
  });

const filterNodeListByDataSet = (
  id: string,
  nodeList: NodeList,
): Array<HTMLElement> =>
  nodeListToArray(nodeList).filter((htmlElement) => !isOnced(htmlElement, id));

/*
 * jQuery once() equivalent.
 */
NodeList.prototype.once = function addOnce(
  key = defaultKey,
): Array<HTMLElement> {
  return addDataSetToNodeList(capitalizeFirstChar(key), this);
};

/*
 * jQuery removeOnce() equivalent.
 * @return Array with HTMLElements who's once has been removed.
 */
NodeList.prototype.removeOnce = function removeOnce(
  key = defaultKey,
): Array<HTMLElement> {
  return removeDataSetFromNodeList(capitalizeFirstChar(key), this);
};

/*
 * jQuery findOnce() equivalent.
 */
NodeList.prototype.findOnce = function findOnce(
  key = defaultKey,
): Array<HTMLElement> {
  return filterNodeListByDataSet(capitalizeFirstChar(key), this);
};
