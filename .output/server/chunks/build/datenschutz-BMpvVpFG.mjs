import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "datenschutz",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-eerie-black rounded-lg p-4 md:p-8 shadow-md max-w-2xl mx-auto" }, _attrs))}><h1 class="text-2xl md:text-3xl font-bold text-gray-100 mb-6">Datenschutzerkl\xE4rung</h1><div class="prose prose-invert max-w-none space-y-6 text-gray-200 text-sm md:text-base leading-relaxed"><section><h2 class="text-lg font-semibold text-moonstone mb-2">1. Verantwortlicher</h2><p>Blackeyestudio \u2013 Arthur Kielbasa</p><p>Hafenstr. 71</p><p>46242 Bottrop</p></section><section><h2 class="text-lg font-semibold text-moonstone mb-2">2. Allgemeines</h2><p>Lovely Reminder speichert alle Daten ausschlie\xDFlich lokal auf Ihrem Ger\xE4t (Local Storage im Browser). Es werden keine personenbezogenen Daten an Server \xFCbertragen oder dort gespeichert.</p></section><section><h2 class="text-lg font-semibold text-moonstone mb-2">3. Lokale Datenspeicherung</h2><p>Die App nutzt den Local Storage Ihres Browsers, um Ihre Aufgaben und Einstellungen zu speichern. Diese Daten verbleiben ausschlie\xDFlich auf Ihrem Ger\xE4t und werden von uns weder erhoben noch verarbeitet.</p></section><section><h2 class="text-lg font-semibold text-moonstone mb-2">4. Cookies und Tracking</h2><p>Es werden keine Cookies verwendet. Es findet kein Tracking oder Analyse Ihres Nutzungsverhaltens statt.</p></section><section><h2 class="text-lg font-semibold text-moonstone mb-2">5. Ihre Rechte (DSGVO)</h2><p>Da keine Daten an uns \xFCbermittelt werden, entf\xE4llt eine Datenverarbeitung durch uns. Sie k\xF6nnen jederzeit alle gespeicherten Daten l\xF6schen, indem Sie die Daten Ihres Browsers bzw. der App zur\xFCcksetzen oder die App deinstallieren.</p></section><section><h2 class="text-lg font-semibold text-moonstone mb-2">6. Kontakt</h2><p>Bei Fragen zum Datenschutz wenden Sie sich bitte an:</p><p>Arthur Kielbasa, Hafenstr. 71, 46242 Bottrop</p></section></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/datenschutz.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=datenschutz-BMpvVpFG.mjs.map
