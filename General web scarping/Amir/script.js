const userData = {
    "webSite": "1",
    "visaBtn": "3", // 2 for National-Student, 3 for Legalization
    "nationality": "1",
    "scheba_number": "IR123456780000000012345678",
    "scheba_name": "اسم و فامیل صاحب شبا",
    "city": "1", // شماره مربوط به شهرتون. https://gist.github.com/LiveInEurope/e29b80372362bfe004495c8694351f6f از این لینک می‌تونید ببینید هر شهر شماره‌ش چی باید باشه
    "officetype": "1",
    "totalPerson": "1", // تعداد نفرات
    "payment_type": "transfer", // atm or transfer
    "popupDatepicker2": "1402/01/01", // تاریخ پرداخت
    "paymentCardInput": "1234123412341234", // شماره کارت
    "popupDatepicker": "1402/01/01", // اگر از حالت حواله استفاده می‌کنید باید تاریخ پرداخت رو اینجا بذارید.
    "transactionid": "12345678", // اگه از حالت حواله استفاده می‌کنید باید اینجا شماره تراکنش رو بذارید.
    "name1": "HASSAN",
    "surname1": "KACHAL",
    "birthday1": "10",
    "birthmonth1": "10",
    "birthyear1": "2020",
    "passport1": "A12345678", // شماره پاسپورت
    "phone1": "0098912345678", // شماره موبایل
    "phone21": "", // شماره موبایل دوم اجباری نیست خواستید پر نکنید.
    "email1": "email@gmail.com",
    "name2": null,
    "surname2": null,
    "birthday2": null,
    "birthmonth2": null,
    "birthyear2": null,
    "passport2": null,
    "phone2": null,
    "phone22": null,
    "email2": null,
    "name3": null,
    "surname3": null,
    "birthday3": null,
    "birthmonth3": null,
    "birthyear3": null,
    "passport3": null,
    "phone3": null,
    "phone23": null,
    "email3": null,
    "name4": null,
    "surname4": null,
    "birthday4": null,
    "birthmonth4": null,
    "birthyear4": null,
    "passport4": null,
    "phone4": null,
    "phone24": null,
    "email4": null,
    "name5": null,
    "surname5": null,
    "birthday5": null,
    "birthmonth5": null,
    "birthyear5": null,
    "passport5": null,
    "phone5": null,
    "phone25": null,
    "email5": null,
    "name6": null,
    "surname6": null,
    "birthday6": null,
    "birthmonth6": null,
    "birthyear6": null,
    "passport6": null,
    "phone6": null,
    "phone26": null,
    "email6": null,
    "vip": "0"
}

const hrefUrl = location.href;
const hostnameUrl = location.hostname;

if (hostnameUrl != '\x77\x77\x77\x2E\x76\x69\x73\x61\x6D\x65\x74\x72\x69\x63\x2E\x63\x6F\x6D') {
    $('\x62\x6F\x64\x79').prepend(
        $(
            '\x3C\x62\x75\x74\x74\x6F\x6E\x20\x73\x74\x79\x6C\x65\x3D\x27\x7A\x2D\x69\x6E\x64\x65\x78\x3A\x20\x39\x39\x39\x39\x39\x3B\x63\x75\x72\x73\x6F\x72\x3A\x20\x70\x6F\x69\x6E\x74\x65\x72\x3B\x70\x6F\x73\x69\x74\x69\x6F\x6E\x3A\x20\x61\x62\x73\x6F\x6C\x75\x74\x65\x3B\x74\x6F\x70\x3A\x20\x35\x30\x70\x78\x3B\x6C\x65\x66\x74\x3A\x20\x34\x70\x78\x3B\x20\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x2D\x63\x6F\x6C\x6F\x72\x3A\x20\x23\x34\x38\x33\x31\x65\x34\x3B\x63\x6F\x6C\x6F\x72\x3A\x20\x77\x68\x69\x74\x65\x3B\x70\x61\x64\x64\x69\x6E\x67\x3A\x20\x35\x70\x78\x20\x31\x35\x70\x78\x27\x20\x69\x64\x3D\x27\x74\x6F\x6B\x65\x6E\x52\x65\x66\x48\x6F\x6D\x65\x27\x3E\u0635\u0641\u062D\u0647\x20\u0627\u0635\u0644\u06CC\x3C\x2F\x62\x75\x74\x74\x6F\x6E\x3E',
        ),
    );
    $('\x23\x74\x6F\x6B\x65\x6E\x52\x65\x66\x48\x6F\x6D\x65').click(function () {
        location.replace('\x68\x74\x74\x70\x73\x3A\x2F\x2F' + hostnameUrl);
    });

    $(document).ready(function () {
        localStorage.setItem('USERDATA', JSON.stringify(userData))
        $('\x68\x65\x61\x64').prepend(
            '\x3C\x73\x63\x72\x69\x70\x74\x3E' +
                '(' +
            NEW.toString() +
            ')()' +
                '\x3C\x2F\x73\x63\x72\x69\x70\x74\x3E',
        );
    });
}

function NEW () {
    const hrefUrl = location.href;
    const hostnameUrl = location.hostname;
    const version = 'amir';

    $(document).ready(function () {
        $('\x2E\x66\x6F\x6F\x74\x65\x72').prepend(
            $(
                '\x3C\x70\x20\x73\x74\x79\x6C\x65\x3D\x27\x77\x69\x64\x74\x68\x3A\x20\x31\x30\x30\x25\x3B\x63\x6F\x6C\x6F\x72\x3A\x20\x77\x68\x69\x74\x65\x3B\x66\x6F\x6E\x74\x2D\x73\x69\x7A\x65\x3A\x20\x78\x2D\x6C\x61\x72\x67\x65\x3B\x74\x65\x78\x74\x2D\x61\x6C\x69\x67\x6E\x3A\x20\x63\x65\x6E\x74\x65\x72\x3B\x70\x61\x64\x64\x69\x6E\x67\x3A\x20\x31\x35\x70\x78\x27\x3E\u0648\u0631\u0698\u0646\x20\u0631\u0628\u0627\u062A\x20\u0634\u0645\u0627\x3A\x20' +
                    version
            ),
        );

        function l(O) {
            $('\x23\x6E\x6F\x74').fadeOut();
            const l = $(
                '\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x27\x6E\x6F\x74\x2D\x69\x74\x65\x6D\x27\x20\x73\x74\x79\x6C\x65\x3D\x27\x6D\x69\x6E\x2D\x68\x65\x69\x67\x68\x74\x3A\x20\x31\x35\x30\x70\x78\x3B\x64\x69\x73\x70\x6C\x61\x79\x3A\x20\x66\x6C\x65\x78\x3B\x61\x6C\x69\x67\x6E\x2D\x69\x74\x65\x6D\x73\x3A\x20\x63\x65\x6E\x74\x65\x72\x3B\x6A\x75\x73\x74\x69\x66\x79\x2D\x63\x6F\x6E\x74\x65\x6E\x74\x3A\x20\x63\x65\x6E\x74\x65\x72\x3B\x62\x6F\x72\x64\x65\x72\x2D\x72\x61\x64\x69\x75\x73\x3A\x20\x32\x35\x70\x78\x3B\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x2D\x63\x6F\x6C\x6F\x72\x3A\x20\x23\x66\x66\x66\x3B\x77\x69\x64\x74\x68\x3A\x20\x31\x35\x30\x70\x78\x3B\x70\x6F\x73\x69\x74\x69\x6F\x6E\x3A\x20\x66\x69\x78\x65\x64\x3B\x7A\x2D\x69\x6E\x64\x65\x78\x3A\x20\x39\x39\x39\x39\x39\x39\x3B\x6C\x65\x66\x74\x3A\x20\x31\x35\x70\x78\x3B\x62\x6F\x72\x64\x65\x72\x3A\x20\x73\x6F\x6C\x69\x64\x20\x32\x70\x78\x20\x23\x63\x63\x63\x39\x63\x39\x3B\x62\x6F\x74\x74\x6F\x6D\x3A\x20\x31\x35\x70\x78\x3B\x27\x20\x3E\x3C\x70\x20\x73\x74\x79\x6C\x65\x3D\x27\x66\x6F\x6E\x74\x2D\x77\x65\x69\x67\x68\x74\x3A\x20\x62\x6F\x6C\x64\x3B\x6D\x61\x72\x67\x69\x6E\x3A\x20\x30\x3B\x66\x6F\x6E\x74\x2D\x73\x69\x7A\x65\x3A\x20\x31\x34\x70\x78\x3B\x74\x65\x78\x74\x2D\x61\x6C\x69\x67\x6E\x3A\x20\x63\x65\x6E\x74\x65\x72\x3B\x63\x6F\x6C\x6F\x72\x3A\x20\x23\x33\x33\x33\x3B\x70\x61\x64\x64\x69\x6E\x67\x3A\x20\x31\x30\x70\x78\x3B\x27\x3E' +
                    O +
                    '\x3C\x2F\x70\x3E\x3C\x2F\x64\x69\x76\x3E',
            );
            $('\x62\x6F\x64\x79').prepend(l);
            setTimeout(function () {
                l.fadeOut(function () {
                    $(this).fadeOut();
                });
            }, 2000);
            setTimeout(function () {
                l.fadeOut(function () {
                    $(this).remove();
                });
            }, 4000);
        }
        function h(H) {
            l(H);
            console.log(H);
        }

        function f(r) {
            if (r['\x73\x74\x61\x74\x75\x73'] === 429) {
                $('\x23\x65\x34\x32\x39').remove();
                $('\x2E\x6F\x72\x69\x67\x69\x6E').prepend(
                    $(
                        '\x3C\x64\x69\x76\x20\x69\x64\x3D\x27\x65\x34\x32\x39\x27\x20\x73\x74\x79\x6C\x65\x3D\x27\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x2D\x63\x6F\x6C\x6F\x72\x3A\x20\x23\x37\x63\x32\x61\x34\x33\x3B\x77\x69\x64\x74\x68\x3A\x20\x31\x30\x30\x25\x3B\x27\x3E\x3C\x70\x20\x73\x74\x79\x6C\x65\x3D\x27\x77\x69\x64\x74\x68\x3A\x20\x31\x30\x30\x25\x3B\x63\x6F\x6C\x6F\x72\x3A\x20\x77\x68\x69\x74\x65\x3B\x66\x6F\x6E\x74\x2D\x73\x69\x7A\x65\x3A\x20\x78\x2D\x6C\x61\x72\x67\x65\x3B\x74\x65\x78\x74\x2D\x61\x6C\x69\x67\x6E\x3A\x20\x63\x65\x6E\x74\x65\x72\x3B\x70\x61\x64\x64\x69\x6E\x67\x3A\x20\x31\x35\x70\x78\x27\x3E\u0634\u0645\u0627\x20\u0628\u0644\u0627\u06A9\x20\u0634\u062F\u0647\x20\u0627\u06CC\u062F\x20\u06CC\u0627\x20\u0627\u06CC\u0646\u062A\u0631\u0646\u062A\x20\u0631\u0627\x20\u0639\u0648\u0636\x20\u06A9\u0646\u06CC\u062F\x20\u06CC\u0627\x20\u06CC\u06A9\x20\u0633\u0627\u0639\u062A\x20\u0635\u0628\u0631\x20\u06A9\u0646\u06CC\u062F\x3C\x2F\x70\x3E\x3C\x2F\x64\x69\x76\x3E',
                    ),
                );
                h(
                    '\u0634\u0645\u0627\x20\u0628\u0644\u0627\u06A9\x20\u0634\u062F\u0647\x20\u0627\u06CC\u062F\x20\u06CC\u0627\x20\u0627\u06CC\u0646\u062A\u0631\u0646\u062A\x20\u0631\u0627\x20\u0639\u0648\u0636\x20\u06A9\u0646\u06CC\u062F\x20\u06CC\u0627\x20\u06CC\u06A9\x20\u0633\u0627\u0639\u062A\x20\u0635\u0628\u0631\x20\u06A9\u0646\u06CC\u062F',
                );
            }
            if (r['\x73\x74\x61\x74\x75\x73'] === 403) {
                $('\x23\x65\x34\x30\x33').remove();
                $('\x2E\x6F\x72\x69\x67\x69\x6E').prepend(
                    $(
                        '\x3C\x64\x69\x76\x20\x69\x64\x3D\x27\x65\x34\x30\x33\x27\x20\x73\x74\x79\x6C\x65\x3D\x27\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x2D\x63\x6F\x6C\x6F\x72\x3A\x20\x23\x37\x63\x32\x61\x34\x33\x3B\x77\x69\x64\x74\x68\x3A\x20\x31\x30\x30\x25\x3B\x27\x3E\x3C\x70\x20\x73\x74\x79\x6C\x65\x3D\x27\x77\x69\x64\x74\x68\x3A\x20\x31\x30\x30\x25\x3B\x63\x6F\x6C\x6F\x72\x3A\x20\x77\x68\x69\x74\x65\x3B\x66\x6F\x6E\x74\x2D\x73\x69\x7A\x65\x3A\x20\x78\x2D\x6C\x61\x72\x67\x65\x3B\x74\x65\x78\x74\x2D\x61\x6C\x69\x67\x6E\x3A\x20\x63\x65\x6E\x74\x65\x72\x3B\x70\x61\x64\x64\x69\x6E\x67\x3A\x20\x31\x35\x70\x78\x27\x3E\x27\u0648\u0642\u062A\x20\u0634\u0645\u0627\x20\u0628\u0647\x20\u067E\u0627\u06CC\u0627\u0646\x20\u0631\u0633\u06CC\u062F\u0647\x20\u0627\u0633\u062A\x20\u0627\u0632\x20\u0633\u0645\u062A\x20\u06A9\u0644\u0648\u062F\x20\u0641\u0644\u0631\x20\u0648\x20\u0627\u062C\u0628\u0627\u0631\u06CC\x20\u0628\u0627\u06CC\u062F\x20\u0628\u0647\x20\u0628\u0631\u06AF\u0647\x20\u0627\u0648\u0644\u06CC\x20\u0628\u0631\u06AF\u0631\u062F\u06CC\u062F\x20\u0631\u0628\u0627\u062A\x20\u0634\u0645\u0627\x20\u0631\u0627\x20\u0647\u062F\u0627\u06CC\u062A\x20\u0645\u06CC\u06A9\u0646\u062F\x20\u0648\x20\u0627\u0632\x20\u0627\u0648\u0644\x20\u0634\u0631\u0648\u0639\x20\u06A9\u0646\u06CC\u062F\x27\x3C\x2F\x70\x3E\x3C\x2F\x64\x69\x76\x3E',
                    ),
                );
                h(
                    '\u0648\u0642\u062A\x20\u0634\u0645\u0627\x20\u0628\u0647\x20\u067E\u0627\u06CC\u0627\u0646\x20\u0631\u0633\u06CC\u062F\u0647\x20\u0627\u0633\u062A\x20\u0627\u0632\x20\u0633\u0645\u062A\x20\u06A9\u0644\u0648\u062F\x20\u0641\u0644\u0631\x20\u0648\x20\u0627\u062C\u0628\u0627\u0631\u06CC\x20\u0628\u0627\u06CC\u062F\x20\u0628\u0647\x20\u0628\u0631\u06AF\u0647\x20\u0627\u0648\u0644\u06CC\x20\u0628\u0631\u06AF\u0631\u062F\u06CC\u062F\x20\u0631\u0628\u0627\u062A\x20\u0634\u0645\u0627\x20\u0631\u0627\x20\u0647\u062F\u0627\u06CC\u062A\x20\u0645\u06CC\u06A9\u0646\u062F\x20\u0648\x20\u0627\u0632\x20\u0627\u0648\u0644\x20\u0634\u0631\u0648\u0639\x20\u06A9\u0646\u06CC\u062F',
                );
                setTimeout(function () {
                    location.replace('\x68\x74\x74\x70\x73\x3A\x2F\x2F' + hostnameUrl);
                }, 1000);
            }
            if (r['\x73\x74\x61\x74\x75\x73'] === 502) {
                $('\x23\x65\x35\x30\x32').remove();
                $('\x2E\x6F\x72\x69\x67\x69\x6E').prepend(
                    $(
                        '\x3C\x64\x69\x76\x20\x69\x64\x3D\x27\x65\x35\x30\x32\x27\x20\x73\x74\x79\x6C\x65\x3D\x27\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x2D\x63\x6F\x6C\x6F\x72\x3A\x20\x23\x37\x63\x32\x61\x34\x33\x3B\x77\x69\x64\x74\x68\x3A\x20\x31\x30\x30\x25\x3B\x27\x3E\x3C\x70\x20\x73\x74\x79\x6C\x65\x3D\x27\x77\x69\x64\x74\x68\x3A\x20\x31\x30\x30\x25\x3B\x63\x6F\x6C\x6F\x72\x3A\x20\x77\x68\x69\x74\x65\x3B\x66\x6F\x6E\x74\x2D\x73\x69\x7A\x65\x3A\x20\x78\x2D\x6C\x61\x72\x67\x65\x3B\x74\x65\x78\x74\x2D\x61\x6C\x69\x67\x6E\x3A\x20\x63\x65\x6E\x74\x65\x72\x3B\x70\x61\x64\x64\x69\x6E\x67\x3A\x20\x31\x35\x70\x78\x27\x3E\u062A\u0631\u0627\u0641\u06CC\u06A9\x20\u0633\u0627\u06CC\u062A\x20\u0628\u0627\u0644\u0627\u0633\u062A\x20\u0648\x20\u0631\u0628\u0627\u062A\x20\u0628\u0647\x20\u0635\u0648\u0631\u062A\x20\u0627\u062A\u0648\u0645\u0627\u062A\u06CC\u06A9\x20\u0628\u0639\u062F\x20\u0627\u0632\x20\x33\x30\x20\u062B\u0627\u0646\u06CC\u0647\x20\u0645\u0631\u062D\u0644\u0647\x20\u0631\u0627\x20\u062A\u06A9\u0631\u0627\u0631\x20\u0645\u06CC\x20\u06A9\u0646\u062F\x3C\x2F\x70\x3E\x3C\x2F\x64\x69\x76\x3E',
                    ),
                );
                h(
                    '\u062A\u0631\u0627\u0641\u06CC\u06A9\x20\u0633\u0627\u06CC\u062A\x20\u0628\u0627\u0644\u0627\u0633\u062A\x20\u0648\x20\u0631\u0628\u0627\u062A\x20\u0628\u0647\x20\u0635\u0648\u0631\u062A\x20\u0627\u062A\u0648\u0645\u0627\u062A\u06CC\u06A9\x20\u0628\u0639\u062F\x20\u0627\u0632\x20\x33\x30\x20\u062B\u0627\u0646\u06CC\u0647\x20\u0645\u0631\u062D\u0644\u0647\x20\u0631\u0627\x20\u062A\u06A9\u0631\u0627\u0631\x20\u0645\u06CC\x20\u06A9\u0646\u062F',
                );
            }
        }

        if (
            (
                hrefUrl == '\x68\x74\x74\x70\x73\x3A\x2F\x2F' + hostnameUrl
                || hrefUrl == '\x68\x74\x74\x70\x73\x3A\x2F\x2F' + hostnameUrl + '\x2F\x69\x72'
                || hrefUrl == '\x68\x74\x74\x70\x73\x3A\x2F\x2F' + hostnameUrl + '\x2F\x65\x6E'
            ) && $('\x68\x31').hasClass('\x69\x6E\x6C\x69\x6E\x65\x2D\x62\x6C\x6F\x63\x6B')
        ) {
            title = $('\x68\x31\x20\x2E\x69\x6E\x6C\x69\x6E\x65\x2D\x62\x6C\x6F\x63\x6B').html();
            h(
                '\u062E\u0637\u0627\u06CC\x20\x35\x30\x32\x20\u0628\u0631\u06AF\u0647\x20\u062A\u0627\x20\x37\x20\u062B\u0627\u0646\u06CC\u0647\x20\u062F\u06CC\u06AF\u0631\x20\u0631\u0641\u0631\u0634\x20\u0645\u06CC\u0634\u0648\u062F',
            );
            if (title == '\x42\x61\x64\x20\x67\x61\x74\x65\x77\x61\x79') {
                setTimeout(function () {
                    location.replace(hrefUrl);
                }, 1000 + Math.random() * 2000);
            }
        } else if ($('\x74\x69\x74\x6C\x65').html() == '\x4E\x6F\x74\x20\x41\x6C\x6C\x6F\x77\x65\x64') {
            h(
                '\u062A\u0627\x20\x37\x20\u062B\u0627\u0646\u06CC\u0647\x20\u062F\u06CC\u06AF\u0631\x20\u0628\u0631\u06AF\u0647\x20\u0631\u0641\u0631\u0634\x20\u0645\u06CC\x20\u0634\u0648\u062F',
            );
            setTimeout(function () {
                location.replace('\x68\x74\x74\x70\x73\x3A\x2F\x2F' + hostnameUrl);
                    }, 1000 + Math.random() * 2000);
        } else {
            const q = JSON.parse(localStorage.getItem('USERDATA'));
            console.log(q)

            setTimeout(function () {
                if (q['\x77\x65\x62\x53\x69\x74\x65'] === '\x31') {
                    if (q['\x76\x69\x73\x61\x42\x74\x6E'] === '\x32') {
                        const P = document.getElementById(
                            '\x6E\x61\x74\x69\x6F\x6E\x61\x6C\x42\x74\x6E',
                        );
                        if (P) {
                            P.click();
                        }
                    }
                    if (q['\x76\x69\x73\x61\x42\x74\x6E'] === '\x33') {
                        const P = document.getElementById(
                            '\x6C\x65\x67\x61\x6C\x69\x7A\x61\x74\x69\x6F\x6E\x42\x74\x6E',
                        );
                        if (P) {
                            P.click();
                        }
                    }
                } else if (q['\x77\x65\x62\x53\x69\x74\x65'] === '\x32') {
                    if (q['\x76\x69\x73\x61\x42\x74\x6E'] === '\x31') {
                        const P = document.getElementById(
                            '\x73\x63\x68\x65\x6E\x67\x65\x6E\x42\x74\x6E',
                        );
                        if (P) {
                            P.click();
                        }
                    }
                    if (q['\x76\x69\x73\x61\x42\x74\x6E'] === '\x32') {
                        const P = document.getElementById(
                            '\x6E\x61\x74\x69\x6F\x6E\x61\x6C\x57\x6F\x72\x6B\x69\x6E\x67\x42\x74\x6E',
                        );
                        if (P) {
                            P.click();
                        }
                    }
                    if (q['\x76\x69\x73\x61\x42\x74\x6E'] === '\x33') {
                        const P = document.getElementById(
                            '\x6C\x65\x67\x61\x6C\x69\x7A\x61\x74\x69\x6F\x6E\x42\x74\x6E',
                        );
                        if (P) {
                            P.click();
                        }
                    }
                    if (q['\x76\x69\x73\x61\x42\x74\x6E'] === '\x34') {
                        const P = document.getElementById(
                            '\x6E\x61\x74\x69\x6F\x6E\x61\x6C\x42\x74\x6E',
                        );
                        if (P) {
                            P.click();
                        }
                    }
                }
            }, 500);

            if (
                hrefUrl.split('\x2F\x53\x63\x68\x65\x6E\x67\x65\x6E')[0] +
                    '\x2F\x53\x63\x68\x65\x6E\x67\x65\x6E' ===
                hrefUrl
            ) {
                localStorage.setItem('\x64\x61\x74\x65\x70\x69\x63\x6B\x65\x72', '\x31');
                if (q['\x76\x69\x73\x61\x42\x74\x6E'] == '\x31') {
                    l('\u062F\u0631\u062D\u0627\u0644\x20\u067E\u0631\u062F\u0627\u0632\u0634');
                    localStorage.setItem('\x67\x65\x74\x43\x6F\x6E\x73\x75\x6C\x61\x72', '\x32');
                    setTimeout(function () {
                        $('\x23\x72\x65\x73\x75\x6C\x74\x30')[0].click();
                        setTimeout(function () {
                            if (q['\x6E\x61\x74\x69\x6F\x6E\x61\x6C\x69\x74\x79'] === '\x31') {
                                $('\x23\x72\x65\x73\x75\x6C\x74\x31')[0].click();
                                setTimeout(function () {
                                    l(
                                        '\u0627\u0631\u0633\u0627\u0644\x20\u062F\u0631\u062E\u0648\u0627\u0633\u062A',
                                    );
                                    $('\x23\x62\x74\x6E\x53\x75\x62\x6D\x69\x74')[0].click();
                                }, 1000);
                            }
                            if (q['\x6E\x61\x74\x69\x6F\x6E\x61\x6C\x69\x74\x79'] === '\x32') {
                                $('\x23\x72\x65\x73\x75\x6C\x74\x32')[0].click();
                                setTimeout(function () {
                                    $('\x23\x72\x65\x73\x75\x6C\x74\x35')[0].click();
                                    setTimeout(function () {
                                        l(
                                            '\u0627\u0631\u0633\u0627\u0644\x20\u062F\u0631\u062E\u0648\u0627\u0633\u062A',
                                        );
                                        $('\x23\x62\x74\x6E\x53\x75\x62\x6D\x69\x74')[0].click();
                                    }, 1000);
                                }, 1000);
                            }
                        }, 1000);
                    }, 1000);
                } else {
                    l(
                        '\u062E\u0637\u0627\u06CC\x20\u062F\u0627\u062F\u0647\u060C\x20\u0644\u0637\u0641\u0627\x20\u0628\u0647\x20\u0628\u0631\u06AF\u0647\x20\u0642\u0628\u0644\x20\u0628\u0631\u06AF\u0631\u062F\u06CC\u062F\x20\u0648\x20\u0631\u0641\u0631\u0634\x20\u06A9\u0646\u06CC\u062F',
                    );
                }
            } else if (
                hrefUrl.split('\x2F\x4C\x65\x67\x61\x6C\x69\x7A\x61\x74\x69\x6F\x6E')[0] +
                    '\x2F\x4C\x65\x67\x61\x6C\x69\x7A\x61\x74\x69\x6F\x6E' ===
                hrefUrl
            ) {
                localStorage.setItem('\x64\x61\x74\x65\x70\x69\x63\x6B\x65\x72', '\x31');
                if (q['\x76\x69\x73\x61\x42\x74\x6E'] == '\x33') {
                    l('\u062F\u0631\u062D\u0627\u0644\x20\u067E\u0631\u062F\u0627\u0632\u0634');
                    localStorage.setItem('\x67\x65\x74\x43\x6F\x6E\x73\x75\x6C\x61\x72', '\x33');
                    setTimeout(function () {
                        $('\x23\x72\x65\x73\x75\x6C\x74\x30')[0].click();
                        setTimeout(function () {
                            if (q['\x6E\x61\x74\x69\x6F\x6E\x61\x6C\x69\x74\x79'] === '\x31') {
                                $('\x23\x72\x65\x73\x75\x6C\x74\x31')[0].click();
                                setTimeout(function () {
                                    l(
                                        '\u0627\u0631\u0633\u0627\u0644\x20\u062F\u0631\u062E\u0648\u0627\u0633\u062A',
                                    );
                                    $('\x23\x62\x74\x6E\x53\x75\x62\x6D\x69\x74')[0].click();
                                }, 1000);
                            }
                            if (q['\x6E\x61\x74\x69\x6F\x6E\x61\x6C\x69\x74\x79'] === '\x32') {
                                $('\x23\x72\x65\x73\x75\x6C\x74\x32')[0].click();
                                setTimeout(function () {
                                    l(
                                        '\u0627\u0631\u0633\u0627\u0644\x20\u062F\u0631\u062E\u0648\u0627\u0633\u062A',
                                    );
                                    $('\x23\x62\x74\x6E\x53\x75\x62\x6D\x69\x74')[0].click();
                                }, 1000);
                            }
                        }, 1000);
                    }, 1000);
                } else {
                    l(
                        '\u062E\u0637\u0627\u06CC\x20\u062F\u0627\u062F\u0647\u060C\x20\u0644\u0637\u0641\u0627\x20\u0628\u0647\x20\u0628\u0631\u06AF\u0647\x20\u0642\u0628\u0644\x20\u0628\u0631\u06AF\u0631\u062F\u06CC\u062F\x20\u0648\x20\u0631\u0641\u0631\u0634\x20\u06A9\u0646\u06CC\u062F',
                    );
                }
            } else if (
                hrefUrl.split(
                    '\x2F\x4E\x61\x74\x69\x6F\x6E\x61\x6C\x53\x74\x75\x64\x65\x6E\x74',
                )[0] +
                    '\x2F\x4E\x61\x74\x69\x6F\x6E\x61\x6C\x53\x74\x75\x64\x65\x6E\x74' ===
                hrefUrl
            ) {
                localStorage.setItem('\x64\x61\x74\x65\x70\x69\x63\x6B\x65\x72', '\x31');
                if (q['\x77\x65\x62\x53\x69\x74\x65'] === '\x31') {
                    if (q['\x76\x69\x73\x61\x42\x74\x6E'] == '\x32') {
                        l('\u062F\u0631\u062D\u0627\u0644\x20\u067E\u0631\u062F\u0627\u0632\u0634');
                        localStorage.setItem(
                            '\x67\x65\x74\x43\x6F\x6E\x73\x75\x6C\x61\x72',
                            '\x31',
                        );
                        setTimeout(function () {
                            $('\x23\x72\x65\x73\x75\x6C\x74\x31')[0].click();
                            setTimeout(function () {
                                if (q['\x6E\x61\x74\x69\x6F\x6E\x61\x6C\x69\x74\x79'] === '\x31') {
                                    $('\x23\x72\x65\x73\x75\x6C\x74\x33')[0].click();
                                    setTimeout(function () {
                                        l(
                                            '\u0627\u0631\u0633\u0627\u0644\x20\u062F\u0631\u062E\u0648\u0627\u0633\u062A',
                                        );
                                        $('\x23\x62\x74\x6E\x53\x75\x62\x6D\x69\x74')[0].click();
                                    }, 500);
                                }
                                if (q['\x6E\x61\x74\x69\x6F\x6E\x61\x6C\x69\x74\x79'] === '\x32') {
                                    $('\x23\x72\x65\x73\x75\x6C\x74\x34')[0].click();
                                    setTimeout(function () {
                                        $('\x23\x72\x65\x73\x75\x6C\x74\x35')[0].click();
                                        setTimeout(function () {
                                            l(
                                                '\u0627\u0631\u0633\u0627\u0644\x20\u062F\u0631\u062E\u0648\u0627\u0633\u062A',
                                            );
                                            $(
                                                '\x23\x62\x74\x6E\x53\x75\x62\x6D\x69\x74',
                                            )[0].click();
                                        }, 1000);
                                    }, 1000);
                                }
                            }, 500);
                        }, 500);
                    } else {
                        l(
                            '\u062E\u0637\u0627\u06CC\x20\u062F\u0627\u062F\u0647\u060C\x20\u0644\u0637\u0641\u0627\x20\u0628\u0647\x20\u0628\u0631\u06AF\u0647\x20\u0642\u0628\u0644\x20\u0628\u0631\u06AF\u0631\u062F\u06CC\u062F\x20\u0648\x20\u0631\u0641\u0631\u0634\x20\u06A9\u0646\u06CC\u062F',
                        );
                    }
                }
                if (q['\x77\x65\x62\x53\x69\x74\x65'] === '\x32') {
                    if (q['\x76\x69\x73\x61\x42\x74\x6E'] == '\x34') {
                        l('\u062F\u0631\u062D\u0627\u0644\x20\u067E\u0631\u062F\u0627\u0632\u0634');
                        localStorage.setItem(
                            '\x67\x65\x74\x43\x6F\x6E\x73\x75\x6C\x61\x72',
                            '\x31',
                        );
                        setTimeout(function () {
                            $('\x23\x72\x65\x73\x75\x6C\x74\x31')[0].click();
                            setTimeout(function () {
                                if (q['\x6E\x61\x74\x69\x6F\x6E\x61\x6C\x69\x74\x79'] === '\x31') {
                                    $('\x23\x72\x65\x73\x75\x6C\x74\x33')[0].click();
                                    setTimeout(function () {
                                        l(
                                            '\u0627\u0631\u0633\u0627\u0644\x20\u062F\u0631\u062E\u0648\u0627\u0633\u062A',
                                        );
                                        $('\x23\x62\x74\x6E\x53\x75\x62\x6D\x69\x74')[0].click();
                                    }, 1000);
                                }
                                if (q['\x6E\x61\x74\x69\x6F\x6E\x61\x6C\x69\x74\x79'] === '\x32') {
                                    $('\x23\x72\x65\x73\x75\x6C\x74\x34')[0].click();
                                    setTimeout(function () {
                                        $('\x23\x72\x65\x73\x75\x6C\x74\x35')[0].click();
                                        setTimeout(function () {
                                            l(
                                                '\u0627\u0631\u0633\u0627\u0644\x20\u062F\u0631\u062E\u0648\u0627\u0633\u062A',
                                            );
                                            $(
                                                '\x23\x62\x74\x6E\x53\x75\x62\x6D\x69\x74',
                                            )[0].click();
                                        }, 1000);
                                    }, 1000);
                                }
                            }, 1000);
                        }, 1000);
                    } else {
                        l(
                            '\u062E\u0637\u0627\u06CC\x20\u062F\u0627\u062F\u0647\u060C\x20\u0644\u0637\u0641\u0627\x20\u0628\u0647\x20\u0628\u0631\u06AF\u0647\x20\u0642\u0628\u0644\x20\u0628\u0631\u06AF\u0631\u062F\u06CC\u062F\x20\u0648\x20\u0631\u0641\u0631\u0634\x20\u06A9\u0646\u06CC\u062F',
                        );
                    }
                }
            } else if (
                hrefUrl.split(
                    '\x2F\x4E\x61\x74\x69\x6F\x6E\x61\x6C\x57\x6F\x72\x6B\x69\x6E\x67',
                )[0] +
                    '\x2F\x4E\x61\x74\x69\x6F\x6E\x61\x6C\x57\x6F\x72\x6B\x69\x6E\x67' ===
                hrefUrl
            ) {
                localStorage.setItem('\x64\x61\x74\x65\x70\x69\x63\x6B\x65\x72', '\x31');
                if (q['\x76\x69\x73\x61\x42\x74\x6E'] == '\x32') {
                    l('\u062F\u0631\u062D\u0627\u0644\x20\u067E\u0631\u062F\u0627\u0632\u0634');
                    localStorage.setItem('\x67\x65\x74\x43\x6F\x6E\x73\x75\x6C\x61\x72', '\x34');
                    setTimeout(function () {
                        $('\x23\x72\x65\x73\x75\x6C\x74\x31')[0].click();
                        setTimeout(function () {
                            if (q['\x6E\x61\x74\x69\x6F\x6E\x61\x6C\x69\x74\x79'] === '\x31') {
                                $('\x23\x72\x65\x73\x75\x6C\x74\x33')[0].click();
                                setTimeout(function () {
                                    l(
                                        '\u0627\u0631\u0633\u0627\u0644\x20\u062F\u0631\u062E\u0648\u0627\u0633\u062A',
                                    );
                                    $('\x23\x62\x74\x6E\x53\x75\x62\x6D\x69\x74')[0].click();
                                }, 1000);
                            }
                            if (q['\x6E\x61\x74\x69\x6F\x6E\x61\x6C\x69\x74\x79'] === '\x32') {
                                $('\x23\x72\x65\x73\x75\x6C\x74\x34')[0].click();
                                setTimeout(function () {
                                    $('\x23\x72\x65\x73\x75\x6C\x74\x35')[0].click();
                                    setTimeout(function () {
                                        l(
                                            '\u0627\u0631\u0633\u0627\u0644\x20\u062F\u0631\u062E\u0648\u0627\u0633\u062A',
                                        );
                                        $('\x23\x62\x74\x6E\x53\x75\x62\x6D\x69\x74')[0].click();
                                    }, 1000);
                                }, 1000);
                            }
                        }, 1000);
                    }, 1000);
                } else {
                    l(
                        '\u062E\u0637\u0627\u06CC\x20\u062F\u0627\u062F\u0647\u060C\x20\u0644\u0637\u0641\u0627\x20\u0628\u0647\x20\u0628\u0631\u06AF\u0647\x20\u0642\u0628\u0644\x20\u0628\u0631\u06AF\u0631\u062F\u06CC\u062F\x20\u0648\x20\u0631\u0641\u0631\u0634\x20\u06A9\u0646\u06CC\u062F',
                    );
                }
            }

            function i () {
                $('\x23\x61\x6A\x61\x78\x63\x69\x74\x79').html('<select name="city" id="city" class="form-control jvnsMt20 city"><option value="0" selected="selected">شهر محل زندگی</option><option value="6">اراک</option><option value="7">اردبیل</option><option value="8">ارومیه</option><option value="2">اصفهان</option><option value="9">اهواز</option><option value="10">ایلام</option><option value="11">بجنورد</option><option value="12">بندرعباس</option><option value="13">بوشهر</option><option value="14">بیرجند</option><option value="3">تبریز</option><option value="1">تهران</option><option value="15">خرم آباد</option><option value="16">رشت</option><option value="17">زاهدان</option><option value="18">زنجان</option><option value="19">ساری</option><option value="20">سمنان</option><option value="21">سنندج</option><option value="22">شهرکرد</option><option value="5">شیراز </option><option value="23">قزوین</option><option value="24">قم</option><option value="25">کرج</option><option value="26">کرمان</option><option value="27">کرمانشاه</option><option value="28">گرگان</option><option value="4">مشهد</option><option value="29">همدان </option><option value="30">یاسوج </option><option value="31">یزد</option></select>');
            }
            function j () {
                $('\x23\x61\x6A\x61\x78\x6F\x66\x66\x69\x63\x65').html('<select name="office" id="office" class="form-control jvnsMt20 office"><option value="0" selected="selected">مرکز دریافت مدارک</option><option value="1">تهران</option></select>');
            }
            function k () {
                $('\x23\x61\x6A\x61\x78\x6F\x66\x66\x69\x63\x65\x74\x79\x70\x65').html(
                    '<select name="officetype" id="officetype" class="form-control jvnsMt20 officetype"><option value="0" selected="selected">نوع خدمات</option><option value="1">عادی</option><option value="2">اختصاصی</option></select>',
                );
            }

            if ($('\x23\x6F\x66\x66\x69\x63\x65\x74\x79\x70\x65').length > 0) {
                i();
                j();
                k();
                setTimeout(function () {
                    c();
                }, 2000);
            }

            function c() { // Fills city, office, office type, and number of person
                l('\u062F\u0631\u062D\u0627\u0644\x20\u067E\u0631\u062F\u0627\u0632\u0634');
                $(
                    '\x23\x63\x69\x74\x79\x20\x3E\x20\x6F\x70\x74\x69\x6F\x6E\x5B\x76\x61\x6C\x75\x65\x3D\x22' +
                        q['\x63\x69\x74\x79'] +
                        '\x22\x5D',
                ).prop('selected', true);

                $(
                    '\x23\x6F\x66\x66\x69\x63\x65\x20\x3E\x20\x6F\x70\x74\x69\x6F\x6E\x5B\x76\x61\x6C\x75\x65\x3D\x22\x31\x22\x5D',
                ).prop('selected', true);

                l(
                    '\u062A\u0646\u0638\u06CC\u0645\x20\u0646\u0648\u0639\x20\u062E\u062F\u0645\u0627\u062A',
                );
                $(
                    '\x23\x6F\x66\x66\x69\x63\x65\x74\x79\x70\x65\x20\x3E\x20\x6F\x70\x74\x69\x6F\x6E\x5B\x76\x61\x6C\x75\x65\x3D\x22' +
                        q['\x6F\x66\x66\x69\x63\x65\x74\x79\x70\x65'] +
                        '\x22\x5D',
                ).prop('selected', true);

                $('\x23\x61\x70\x70\x43\x6F\x75\x6E\x74').append(
                    '\x3C\x69\x6E\x70\x75\x74\x20\x74\x79\x70\x65\x3D\x22\x68\x69\x64\x64\x65\x6E\x22\x20\x69\x64\x3D\x22\x74\x6F\x74\x61\x6C\x50\x65\x72\x73\x6F\x6E\x22\x20\x76\x61\x6C\x75\x65\x3D\x22' +
                        q['\x74\x6F\x74\x61\x6C\x50\x65\x72\x73\x6F\x6E'] +
                        '\x22\x3E',
                );
                $(
                    '\x23\x74\x6F\x74\x61\x6C\x50\x65\x72\x73\x6F\x6E\x20\x3E\x20\x6F\x70\x74\x69\x6F\x6E\x5B\x76\x61\x6C\x75\x65\x3D\x22' +
                        q['\x74\x6F\x74\x61\x6C\x50\x65\x72\x73\x6F\x6E'] +
                        '\x22\x5D',
                ).prop('selected', true);

                setTimeout(function () {
                    if (
                        $('\x23\x6F\x66\x66\x69\x63\x65').val() != '\x31' ||
                        $('\x23\x63\x69\x74\x79').val() != q['\x63\x69\x74\x79'] ||
                        $('\x23\x6F\x66\x66\x69\x63\x65\x74\x79\x70\x65').val() !=
                            q['\x6F\x66\x66\x69\x63\x65\x74\x79\x70\x65']
                    ) {
                        c();
                    } else {
                        a();
                    }
                }, 1500);
            }

            function a() { // Fills pay type, payment info, and payment date
                h('\u062F\u0631\u062D\u0627\u0644\x20\u067E\u0631\u062F\u0627\u0632\u0634');
                setTimeout(function () {
                    $(
                        '\x2E\x73\x65\x74\x6E\x65\x77\x63\x61\x6C\x65\x6E\x64\x61\x72\x73\x74\x61\x74\x75\x73',
                    ).val(2);

                    $('\x23\x70\x61\x79\x74\x79\x70\x65').show();
                    if (q['\x70\x61\x79\x6D\x65\x6E\x74\x5F\x74\x79\x70\x65'] === '\x61\x74\x6D') {
                        h(
                            '\u0627\u0639\u0645\u0627\u0644\x20\u0627\u0637\u0644\u0627\u0639\u0627\u062A\x20\u062D\u0633\u0627\u0628',
                        );
                        $('\x23\x74\x72\x61\x6E\x73\x66\x65\x72')[0].click();
                        $('\x23\x61\x74\x6D')[0].click();
                        setTimeout(function () {
                            $(
                                '\x23\x70\x6F\x70\x75\x70\x44\x61\x74\x65\x70\x69\x63\x6B\x65\x72\x32',
                            ).val(
                                q[
                                    '\x70\x6F\x70\x75\x70\x44\x61\x74\x65\x70\x69\x63\x6B\x65\x72\x32'
                                ],
                            );
                            setTimeout(function () {
                                $(
                                    '\x23\x70\x61\x79\x6D\x65\x6E\x74\x43\x61\x72\x64\x49\x6E\x70\x75\x74',
                                ).val(
                                    q[
                                        '\x70\x61\x79\x6D\x65\x6E\x74\x43\x61\x72\x64\x49\x6E\x70\x75\x74'
                                    ],
                                );
                                setTimeout(function () {
                                    h(
                                        '\u0627\u0631\u0633\u0627\u0644\x20\u0627\u0637\u0644\u0627\u0639\u0627\u062A\x20\u067E\u0631\u062F\u0627\u062E\u062A',
                                    );
                                    $(
                                        '\x23\x63\x68\x65\x63\x6B\x43\x61\x72\x64\x4C\x69\x73\x74\x42\x74\x6E',
                                    )[0].click();
                                    if (
                                        typeof $(
                                            '\x2E\x62\x61\x6E\x6B\x70\x61\x79\x6D\x65\x6E\x74\x52\x61\x64\x69\x6F',
                                        ).val() !== '\x75\x6E\x64\x65\x66\x69\x6E\x65\x64'
                                    ) {
                                        if (
                                            $(
                                                '\x2E\x62\x61\x6E\x6B\x70\x61\x79\x6D\x65\x6E\x74\x52\x61\x64\x69\x6F',
                                            ).val() !== null
                                        ) {
                                            $(
                                                '\x2E\x62\x61\x6E\x6B\x70\x61\x79\x6D\x65\x6E\x74\x52\x61\x64\x69\x6F',
                                            )[0].click();
                                            setTimeout(function () {
                                                h(
                                                    '\u0627\u0631\u0633\u0627\u0644\x20\u062F\u0631\u062E\u0648\u0627\u0633\u062A',
                                                );
                                                $(
                                                    '\x23\x62\x74\x6E\x41\x70\x70\x43\x6F\x75\x6E\x74\x4E\x65\x78\x74',
                                                )[0].click();
                                            }, 1000);
                                        }
                                    } else {
                                        h(
                                            '\u062E\u0637\u0627\x20\u0633\u0631\u0648\u0631\u060C\x20\u0646\u06CC\u0627\u0632\x20\u0628\u0647\x20\u0631\u0641\u0631\u0634\x20\u062F\u0627\u0631\u06CC\u062F',
                                        );
                                    }
                                }, 500);
                            }, 500);
                        }, 500);
                    } else if (
                        q['\x70\x61\x79\x6D\x65\x6E\x74\x5F\x74\x79\x70\x65'] ===
                        '\x74\x72\x61\x6E\x73\x66\x65\x72'
                    ) {
                        h(
                            '\u0627\u0639\u0645\u0627\u0644\x20\u0627\u0637\u0644\u0627\u0639\u0627\u062A\x20\u062D\u0633\u0627\u0628',
                        );
                        $('\x23\x74\x72\x61\x6E\x73\x66\x65\x72')[0].click();
                        setTimeout(function () {
                            $(
                                '\x23\x70\x6F\x70\x75\x70\x44\x61\x74\x65\x70\x69\x63\x6B\x65\x72',
                            ).val(
                                q['\x70\x6F\x70\x75\x70\x44\x61\x74\x65\x70\x69\x63\x6B\x65\x72'],
                            );
                            setTimeout(function () {
                                $('\x23\x74\x72\x61\x6E\x73\x61\x63\x74\x69\x6F\x6E\x69\x64').val(
                                    q['\x74\x72\x61\x6E\x73\x61\x63\x74\x69\x6F\x6E\x69\x64'],
                                );
                                setTimeout(function () {
                                    h(
                                        '\u0627\u0631\u0633\u0627\u0644\x20\u062F\u0631\u062E\u0648\u0627\u0633\u062A',
                                    );
                                    $(
                                        '\x23\x62\x74\x6E\x41\x70\x70\x43\x6F\x75\x6E\x74\x4E\x65\x78\x74',
                                    )[0].click();
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }

                    e();
                }, 500);
            }

            function e() { // wait for personal info form to load
                h('\u062F\u0631\u062D\u0627\u0644\x20\u067E\u0631\u062F\u0627\u0632\u0634');
                setTimeout(function () {
                    h('\u0628\u0631\u0631\u0633\u06CC\x20\u062F\u0627\u062F\u0647\x20\u0647\u0627');
                    const G = $(
                        '\x23\x61\x70\x70\x50\x65\x72\x73\x6F\x6E\x61\x6C\x49\x6E\x66\x6F',
                    ).hasClass('\x61\x63\x74\x69\x76\x65');
                    if (G) {
                        h(
                            '\u062A\u0646\u0638\u06CC\u0645\x20\u0645\u062A\u0642\u0627\u0636\u06CC\x20\u0645\u0648\u0641\u0642',
                        );
                        o();
                    } else {
                        h(
                            '\u062A\u0646\u0638\u06CC\u0645\x20\u0645\u062A\u0642\u0627\u0636\u06CC\x20\u0646\u0627\x20\u0645\u0648\u0641\u0642',
                        );
                        e();
                    }
                }, 1000);
            }

            function o() { // Fill the personal info form and go to next step
                h('\u062F\u0631\u062D\u0627\u0644\x20\u067E\u0631\u062F\u0627\u0632\u0634');
                setTimeout(function () {
                    const G = $(
                        '\x23\x61\x70\x70\x50\x65\x72\x73\x6F\x6E\x61\x6C\x49\x6E\x66\x6F',
                    ).hasClass('\x61\x63\x74\x69\x76\x65');
                    if (G) {
                        if (
                            $('\x23\x73\x63\x68\x65\x62\x61\x5F\x6E\x75\x6D\x62\x65\x72').length > 0
                        ) {
                            h(
                                '\u0627\u0639\u0645\u0627\u0644\x20\u0627\u0637\u0644\u0627\u0639\u0627\u062A\x20\u0645\u062A\u0642\u0627\u0636\u06CC',
                            );

                            $('#scheba_number').val(q['scheba_number'])
                            console.log(`setting scheba_number to ${q['scheba_number']}`);
                            $('#scheba_name').val(q['scheba_name'])
                            console.log(`setting scheba_name to ${q['scheba_name']}`);

                            const fields = ['name', 'surname', 'birthday', 'birthmonth', 'birthyear', 'passport', 'phone', 'phone2', 'email']
                            for (let index = 0; index < Number(q['totalPerson']); index++) {
                                const i = index + 1;
                                for (let j = 0; j < fields.length; j++) {
                                    const field = fields[j];
                                    const key = `${field}${i}`;
                                    const value = q[key]
                                    if (value) {
                                        console.log(`setting ${key} to ${value}`);
                                        $(`#${key}`).val(value)
                                    }
                                }
                            }

                            setTimeout(function () {
                                $(
                                    '\x23\x62\x74\x6E\x41\x70\x70\x50\x65\x72\x73\x6F\x6E\x61\x6C\x4E\x65\x78\x74',
                                )[0].click();
                                setTimeout(function () {
                                    const T = $(
                                        '\x23\x70\x72\x65\x76\x69\x65\x77\x63\x68\x6B',
                                    ).prop('\x63\x68\x65\x63\x6B\x65\x64');
                                    if (T) {
                                    } else {
                                        $(
                                            '\x23\x70\x72\x65\x76\x69\x65\x77\x63\x68\x6B',
                                        )[0].click();
                                    }
                                    setTimeout(function () {
                                        $(
                                            '\x23\x62\x74\x6E\x41\x70\x70\x50\x72\x65\x76\x69\x65\x77\x4E\x65\x78\x74',
                                        )[0].click();
                                    }, 500);
                                }, 500);
                            }, 500);
                        }
                    } else {
                        l(
                            '\u062A\u0646\u0638\u06CC\u0645\x20\u0645\u062A\u0642\u0627\u0636\u06CC\x20\u0646\u0627\x20\u0645\u0648\u0641\u0642',
                        );
                        e();
                    }
                }, 1000);
            }
        }
    });
}
