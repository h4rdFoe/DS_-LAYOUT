$(function() {
    var chip = {
      tag: 'chip content',
      image: '', //optional
    };
    $('#diagnoz').chips({
      placeholder: 'начните вводить диагноз',
      secondaryPlaceholder: 'Диагноз',
      autocompleteOptions: {
        data: {
          'A00 Холера': null,
          'С00 Злокачественное новообразование губы': null,
          'В03 Оспа': null
        },
        limit: Infinity,
        minLength: 1
      }
    });
  });

  $(function() {
    var chip = {
      tag: 'chip content',
      image: '', //optional
    };
    $('#diagnoz1').chips({
      placeholder: 'начните вводить диагноз',
      secondaryPlaceholder: 'Диагноз',
      autocompleteOptions: {
        data: {
          'A00 Холера': null,
          'С00 Злокачественное новообразование губы': null,
          'В03 Оспа': null
        },
        limit: Infinity,
        minLength: 1
      }
    });
  });

  $(function() {
    var chip = {
      tag: 'chip content',
      image: '', //optional
    };
    $('#bolezni').chips({
      placeholder: 'Начните ввод заболевания',
      secondaryPlaceholder: 'Добавить заболевание',
      autocompleteOptions: {
        data: {
          'сахарный диабет': null,
          'туберкулез': null,
          'эбола': null
        },
        limit: Infinity,
        minLength: 1
      }
    });
  });

  $(function() {
    var chip = {
      tag: 'chip content',
      image: '', //optional
    };
    $('#vaccine').chips({
      placeholder: 'Начните ввод наименования вакцины',
      secondaryPlaceholder: 'Добавить вакцину',
      autocompleteOptions: {
        data: {
          'БЦЖ - R1': null,
          'Полиомиепит - V2': null,
          'эбола - A1': null
        },
        limit: Infinity,
        minLength: 1
      }
    });
  });

  $(function() {
    var chip = {
      tag: 'chip content',
      image: '', //optional
    };
    $('#CMO').chips({
      placeholder: 'Страховая компания',
      secondaryPlaceholder: 'Страховая компания',
      autocompleteOptions: {
        data: {
          'АКЦИОНЕРНОЕ ОБЩЕСТВО "СТРАХОВАЯ КОМПАНИЯ "СОГАЗ-МЕД" (1002) - Республика Адыгея': null,
          'ФИЛИАЛ АКЦИОНЕРНОГО ОБЩЕСТВА ВТБ МЕДИЦИНСКОЕ СТРАХОВАНИЕ В РЕСПУБЛИКЕ АДЫГЕЯ (1001) - Республика Адыгея': null,
          'ФИЛИАЛ АО ВТБ МЕДИЦИНСКОЕ СТРАХОВАНИЕ В РЕСПУБЛИКЕ БАШКОРТОСТАН (2013) - Республика Башкортостан': null
        },
        limit: Infinity,
        minLength: 1
      }
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      direction: 'left',
      hoverEnabled: false
    });
  });
  