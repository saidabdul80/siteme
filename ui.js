/*
 * MediaSave 
 * https://mediasave.ru/ 
 *
 * @ 2015, Linber LLC
 * License: https://mediasave.ru/info/license/ 
 * Every action with the software such as copying, modification, spread etc. without creator’s written permission is forbidden
*/

window.BuildToStore = "ChromeStore";
/*
 * MediaSave 
 * https://mediasave.ru/ 
 *
 * @ 2015, Linber LLC
 * License: https://mediasave.ru/info/license/ 
 * Every action with the software such as copying, modification, spread etc. without creator’s written permission is forbidden
*/

window.IsProduction = true;

(function() {
    String.prototype.format = function(args) {
        var reg1 = new RegExp("{-?[0-9]+}", "g");
        var reg2 = new RegExp("[-?[0-9]+,.+]", "g");
        var str = this;
        str = str.replace(reg1, function(item) {
            var intVal = parseInt(item.substring(1, item.length - 1));
            var replace;
            if (intVal >= 0) {
                replace = args[intVal];
            } else if (intVal === -1) {
                replace = "{";
            } else if (intVal === -2) {
                replace = "}";
            } else {
                replace = "";
            }
            return replace;
        });
        str = str.replace(reg2, function(item) {
            var pos1 = item.indexOf(",");
            var lastInt = parseInt(item.substring(pos1 - 1, pos1));
            var last2Int = parseInt(item.substring(pos1 - 2, pos1));
            var arrayValues = item.substring(pos1 + 1, item.length - 1).split(",");
            var result = "";
            if (last2Int >= 11 && last2Int <= 19) {
                result = arrayValues[2];
            } else {
                if (lastInt === 1) {
                    result = arrayValues[0];
                } else if (lastInt >= 2 && lastInt <= 4) {
                    result = arrayValues[1];
                } else if (lastInt >= 5 || lastInt === 0) {
                    result = arrayValues[2];
                }
            }
            return result;
        });
        return str;
    };
})();

window.MS = {
    Db: {},
    Browser: chrome,
    Translate: {
        ru: {
            translation: {
                nameApp: "MediaSave. Скачивание музыки",
                descriptionApp: "Позволяет скачивать музыку с любого сайта",
                Rasshireniye_dlya_etogo_sayta_otklyucheno: "Расширение для этого сайта отключено. <br> Хотите включить?",
                Vklyuchit_rasshireniye: "Включить расширение",
                Bez_nazvaniya: "Без названия",
                Neizvestnyy_ispolnitel: "Неизвестный исполнитель",
                Skachat: "Скачать",
                Obnaruzheny_mediafayly: "Обнаружены медиафайлы. Хотите скачать?",
                Mne_nravitsya: "Мне нравится!",
                Vy_deystvitelno_khotite_otklyuchit_rasshireniye: "Вы действительно хотите отключить <br> расширение «MediaSave» для этого сайта?",
                Vy_vsegda_smozhete_vklyuchit_yego: "Вы всегда сможете включить его вновь, нажав на значок расширения",
                Otklyuchit_plagin: "Отключить плагин",
                Svernut: "Свернуть",
                Otmena: "Отмена",
                Vam_nravitsya_nash_plagin: "Вам нравится наш плагин? Поддержите, рассказав друзьям",
                Vy_davno_polzuyetes_plaginom: "Вы уже давно пользуетесь плагином.<br> " + "Для продолжения использования расскажите о нём своим друзьям",
                Ne_khochu_delitsya: "Не хочу делиться",
                Audio: "Аудио",
                Video: "Видео",
                Mb: "мб",
                Udalit: "Удалить",
                Proigrat_v_brauzere: "Проиграть в браузере",
                Priostanovit_proigryvaniye: "Приостановить проигрывание",
                Klassnoye_rasshirniye_chrome_dlya_skachivaniya_muzyki: "Классный плагин для скачивания музыки. Быстро и удобно!",
                Pozvolyayet_besplatno_skachivat_muzyku_s_lyubogo_sayta: "Позволяет бесплатно скачивать музыку с любого сайта. Всем рекомендую!",
                Razvernut: "Развернуть",
                Review: "Оставить отзыв",
                ExampleEmail: "alex-martov@linber.ru",
                "Popup/PoweredBy": "Powered by <b>Linber LLC</b>",
                "Popup/Settings": "Настройки",
                "Popup/ExtensionEnable": "Расширение включено на сайте",
                "Popup/ExtensionDisable": "Расширение выключено на сайте",
                "Popup/WindowLocation": "Расположение окна",
                "Popup/Feedback": "Обратная связь",
                "Popup/YourQuestions": "Ваши вопросы/пожелания",
                "Popup/BottomLeft": "Снизу и слева",
                "Popup/BotomCenter": "Снизу и по центру",
                "Popup/BottomRight": "Снизу и справа",
                "Popup/TopLeft": "Сверху и слева",
                "Popup/TopCenter": "Сверху и по центру",
                "Popup/TopRight": "Сверху и справа",
                "Popup/WriteUs": "Написать нам",
                "Popup/IWantToTell": "Мне кажется, что не хватает...",
                "Popup/UnableSendMessage": "Не удалось отправить сообщение",
                "Popup/TryLater": "Попробуйте позже",
                "Popup/MessageSuccessfullySent": "Сообщение успешно отправлено",
                "Popup/WeWouldAppreciate": "Спасибо, нам важно ваше мнение",
                "Popup/ShowWindowAutomatically": "Показывать файлы автоматически",
                "Popup/NoShowWindowAutomatically": "Не показывать файлы автоматически",
                "Popup/ShowWindowAutomaticallyDesc": "Как только будут найдены файлы для скачивания, они автоматически отобразятся во всплывающем окне (действует для всех сайтов)",
                "Popup/NoShowWindowAutomaticallyDesc": "Чтобы увидеть файлы доступные для скачивания, необходимо нажать на значок расширения и кнопку «Показать файлы» (действует для всех сайтов)",
                "Popup/ExtensionEnableDesc": "Расширение включено и работает на этом сайте",
                "Popup/ExtensionDisableDesc": "Расширение выключено и не работает на этом сайте",
                "Popup/YourEmail": "Ваш email",
                "Popup/PageFilesAreFound": "На странице найдены файлы",
                "Popup/ShowFiles": "Показать файлы",
                "Popup/PageFileNotFound": "На странице не найдено файлов для скачивания",
                "Popup/EnableSuccess": "Расширение успешно включено на этом сайте",
                "Popup/AfterReloadEnableSuccess": "После перезагрузки страницы в браузере расширение вновь начнет работать на этом сайте",
                "Popup/DisableSuccess": "Расширение успешно отключено на этом сайте",
                "Popup/AfterReloadDisableSuccess": "После перезагрузки страницы в браузере расширение перестанет работать на этом сайте",
                "UI/NoShowWindowAutomatically": "Не показывать автоматически",
                "UI/ClearList": "Очистить список и закрыть",
                "UI/Share": "Поделиться в социальных сетях",
                "UI/Close": "Закрыть",
                "UI/downloads": "скачиван[{0},ие,ия,ий]",
                "UI/TheAccountRemains": "На вашем счёте осталось <span data-balance-units>{0}</span> скачиван[{0},ие,ия,ий]",
                "UI/or": "или",
                "UI/GetFree": "Получить бесплатно",
                "UI/DisableAd": "Отключить рекламу",
                "UI/BalanceDescription1": "При нулевом балансе будет активирован показ рекламы.<br/> Чтобы его отключить, необходимо пополнить баланс на любую сумму",
                "UI/BalanceDescription2": "Активирован показ рекламы.<br/> Чтобы его отключить, необходимо пополнить баланс на любую сумму",
                "UI/TheAccountRemainsSubscriptionActive": "Ваша подписка действует до <b>{0}</b>",
                "UI/TheAccountRemainsSubscriptionExpired": "Ваша подписка истекла. Вы можете ее продлить",
                "UI/BalanceClickToMore": "Ваша подписка. Нажмите, чтобы узнать подробнее",
                "UI/SubscribeDoTitle": "до {0}",
                "UI/PayDownloads": "Купить или продлить подписку"
            }
        },
        en: {
            translation: {
                nameApp: "MediaSave. Downloading music files",
                descriptionApp: "You can download music files from any website",
                Rasshireniye_dlya_etogo_sayta_otklyucheno: "The extension is disable for this website. <br> Do you want to do it enable?",
                Vklyuchit_rasshireniye: "Enable the extension",
                Bez_nazvaniya: "No name",
                Neizvestnyy_ispolnitel: "Unknown performer",
                Skachat: "Download",
                Obnaruzheny_mediafayly: "Some media files have been found out",
                Mne_nravitsya: "I like it!",
                Vy_deystvitelno_khotite_otklyuchit_rasshireniye: "Do you really want to disable the extension «MediaSave» for this website?",
                Vy_vsegda_smozhete_vklyuchit_yego: "You can always to do it enable again, pressing on the extension's icon",
                Otklyuchit_plagin: "Disable the extension",
                Svernut: "Reduce",
                Otmena: "Cancel",
                Vam_nravitsya_nash_plagin: "Do you like our extension? Share with your friends",
                Vy_davno_polzuyetes_plaginom: "You use the extension for a long time.<br> Share with your friends for further using",
                Ne_khochu_delitsya: "I don't want to share",
                Audio: "Audio",
                Video: "Video",
                Mb: "mb",
                Udalit: "Delete",
                Proigrat_v_brauzere: "Play in the browser",
                Priostanovit_proigryvaniye: "Pause playback",
                Klassnoye_rasshirniye_chrome_dlya_skachivaniya_muzyki: "The plugin is cool for downloading music. Quickly and easily!",
                Pozvolyayet_besplatno_skachivat_muzyku_s_lyubogo_sayta: "It helps you to download music from any website absolutely free. I recommend it!",
                Razvernut: "Expand",
                Review: "Comment",
                ExampleEmail: "alex-martov@linber.ru",
                "Popup/PoweredBy": "Powered by <b>Linber LLC</b>",
                "Popup/Settings": "Settings",
                "Popup/ExtensionEnable": "The extension works on the website",
                "Popup/ExtensionDisable": "The extension turned off on the website",
                "Popup/WindowLocation": "Position of the window",
                "Popup/Feedback": "Feedback",
                "Popup/YourQuestions": "Your questions/wishes",
                "Popup/BottomLeft": "Bottom and left",
                "Popup/BotomCenter": "Bottom and center",
                "Popup/BottomRight": "Bottom and right",
                "Popup/TopLeft": "Top and left",
                "Popup/TopCenter": "Top and center",
                "Popup/TopRight": "Top and right",
                "Popup/WriteUs": "Write us",
                "Popup/IWantToTell": "I suppose, there is lack of...",
                "Popup/UnableSendMessage": "The message has not been sent",
                "Popup/TryLater": "Please, try it later",
                "Popup/MessageSuccessfullySent": "The message has been sent successfully",
                "Popup/WeWouldAppreciate": "Thank you. Your opinion is very important for us",
                "Popup/ShowWindowAutomatically": "Show files automatically",
                "Popup/NoShowWindowAutomatically": "Do not show files automatically",
                "Popup/ShowWindowAutomaticallyDesc": "When files for downloading are found out, they will be shown in pop-up automatically (works on all websites)",
                "Popup/NoShowWindowAutomaticallyDesc": "You should click on extension’s icon and the button “Show files” to see files for downloading (works on all websites)",
                "Popup/ExtensionEnableDesc": "The extension is on and works on this website",
                "Popup/ExtensionDisableDesc": " The extension is off and doesn’t work on this website",
                "Popup/YourEmail": "Your email",
                "Popup/PageFilesAreFound": "Files have been found out on this page",
                "Popup/ShowFiles": "Show files",
                "Popup/PageFileNotFound": "Files for downloading have not been found out on this page",
                "Popup/EnableSuccess": "The extension has been switched on this website successfully",
                "Popup/AfterReloadEnableSuccess": "The extension will start working again on this website after reloading the page in your browser",
                "Popup/DisableSuccess": "The extension has been switched off on this website successfully",
                "Popup/AfterReloadDisableSuccess": "The extension will stop working on this website after reloading the page in your browser",
                "UI/NoShowWindowAutomatically": "Do not show automatically",
                "UI/ClearList": "Clear the list and close",
                "UI/Share": "Share",
                "UI/Close": "Close",
                "UI/downloads": "downloadings",
                "UI/TheAccountRemains": "You have <span data-balance-units>{0}</span> downloadings on your balance",
                "UI/or": "or",
                "UI/GetFree": "Get free",
                "UI/DisableAd": "Switch off ad",
                "UI/BalanceDescription1": "Advertisements will be activated when your balance is equal zero.<br/> You should replenish your balance to switch off advertisements",
                "UI/BalanceDescription2": "Advertisements are activated.<br/> You should replenish your balance to switch off advertisements",
                "UI/TheAccountRemainsSubscriptionActive": "Your subscription is active till <b>{0}</b>",
                "UI/TheAccountRemainsSubscriptionExpired": "Your subscription has expired. You can extend it",
                "UI/BalanceClickToMore": "Your subscription. Click here to know more details",
                "UI/SubscribeDoTitle": "till {0}",
                "UI/PayDownloads": "Buy or extend subscription"
            }
        }
    },
    BrowserInfo: {
        Name: "chrome"
    },
    Init: function() {
        if (MS.BrowserInfo.Name === "firefox") {
            try {
                MS.Browser.storage.sync.get();
                MS.Browser.storage.local.get(function(dataLocal) {
                    if (dataLocal && Object.keys(dataLocal).length > 0) {
                        MS.Browser.storage.sync.get(function(dataSync) {
                            if (dataSync && Object.keys(dataSync).length > 0) {
                                return;
                            }
                            MS.Browser.storage.sync.set(dataLocal, function() {
                                MS.Browser.storage.local.clear();
                            });
                        });
                    }
                });
            } catch (e) {
                MS.Browser.storage.sync = MS.Browser.storage.local;
            }
        }
    }
};

(function() {
    var urlBase = MS.Browser.runtime.getURL("");
    if (urlBase.indexOf("moz-extension://") > -1) {
        MS.BrowserInfo.Name = "firefox";
        MS.Browser.storage.sync = MS.Browser.storage.local;
    } else {
        MS.BrowserInfo.Name = "chrome";
    }
})();

(function() {
    MS.Browser.runtime.onMessage.addListener(function(request, sender, sendResponse) {
        var id = sender.extensionId ? sender.extensionId : sender.id;
        if (id !== MS.Browser.runtime.id) {
            return;
        }
        if (request.name === "UiHtml") {
            document.getElementsByTagName("html")[0].innerHTML = request.data;
            var arrayScripts = document.getElementsByTagName("script");
            for (var i = 0; i < arrayScripts.length; i++) {
                var src = arrayScripts[i].src;
                arrayScripts[i].remove();
                var script = document.createElement("script");
                script.src = src;
                document.getElementsByTagName("head")[0].appendChild(script);
            }
        }
    });
    MS.Browser.runtime.sendMessage({
        name: "GetUiHtml"
    });
})();