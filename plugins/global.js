import Vue from 'vue';

Vue.filter('striphtml', function (value) {
  if (process.client) {
    const div = document.createElement('div');
    div.innerHTML = value;
    const text = div.textContent || div.textContent || '';
    return text;
  }
  return '';
});

export default {};
