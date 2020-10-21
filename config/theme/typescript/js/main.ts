import './modules/once';

declare let Drupal: any;
declare let jQuery: any;

/* eslint-disable */
(($, Drupal) => {
  /* eslint-enable */
  Drupal.behaviors.sexyBehavior = {
    attach(context: any) {
      context
        .querySelectorAll('body')
        .once()
        .forEach((element) => {
          const classname = 'sexy-body';
          element.classList.add(classname);
          /* eslint-disable-next-line no-console */
          console.log(`added: ${classname} to ${element.tagName}`);
        });
    },
  };
})(jQuery, Drupal);
