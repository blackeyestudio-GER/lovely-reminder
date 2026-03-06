import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import "/Users/arthur.kielbasa/PhpstormProjects/lovely-reminder/node_modules/hookable/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "datenschutz",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-eerie-black rounded-lg p-4 md:p-8 shadow-md max-w-2xl mx-auto" }, _attrs))}><h1 class="text-2xl md:text-3xl font-bold text-gray-100 mb-6">Datenschutzerklärung</h1><div class="prose prose-invert max-w-none space-y-6 text-gray-200 text-sm md:text-base leading-relaxed"><section><h2 class="text-lg font-semibold text-moonstone mb-2">1. Verantwortlicher</h2><p>Blackeyestudio – Arthur Kielbasa</p><p>Hafenstr. 71</p><p>46242 Bottrop</p></section><section><h2 class="text-lg font-semibold text-moonstone mb-2">2. Allgemeines</h2><p>Lovely Reminder speichert alle Daten ausschließlich lokal auf Ihrem Gerät (Local Storage im Browser). Es werden keine personenbezogenen Daten an Server übertragen oder dort gespeichert.</p></section><section><h2 class="text-lg font-semibold text-moonstone mb-2">3. Lokale Datenspeicherung</h2><p>Die App nutzt den Local Storage Ihres Browsers, um Ihre Aufgaben und Einstellungen zu speichern. Diese Daten verbleiben ausschließlich auf Ihrem Gerät und werden von uns weder erhoben noch verarbeitet.</p></section><section><h2 class="text-lg font-semibold text-moonstone mb-2">4. Cookies und Tracking</h2><p>Es werden keine Cookies verwendet. Es findet kein Tracking oder Analyse Ihres Nutzungsverhaltens statt.</p></section><section><h2 class="text-lg font-semibold text-moonstone mb-2">5. Ihre Rechte (DSGVO)</h2><p>Da keine Daten an uns übermittelt werden, entfällt eine Datenverarbeitung durch uns. Sie können jederzeit alle gespeicherten Daten löschen, indem Sie die Daten Ihres Browsers bzw. der App zurücksetzen oder die App deinstallieren.</p></section><section><h2 class="text-lg font-semibold text-moonstone mb-2">6. Kontakt</h2><p>Bei Fragen zum Datenschutz wenden Sie sich bitte an:</p><p>Arthur Kielbasa, Hafenstr. 71, 46242 Bottrop</p></section></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/datenschutz.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=datenschutz-BMpvVpFG.js.map
