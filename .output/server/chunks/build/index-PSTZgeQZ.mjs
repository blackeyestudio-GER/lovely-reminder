import { _ as __nuxt_component_0 } from './nuxt-link-MOZoSEA2.mjs';
import { ref, defineComponent, unref, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrIncludeBooleanAttr, ssrRenderAttr, ssrRenderClass, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const MS_PER_DAY = 24 * 60 * 60 * 1e3;
const tasks = ref([]);
const generateId = () => `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
const useTasks = () => {
  const loadFromLocalStorage = () => {
    return;
  };
  const saveToLocalStorage = () => {
    return;
  };
  const checkAndReactivateTasks = () => {
    const now = Date.now();
    tasks.value = tasks.value.map((task) => {
      if (task.completedAt === null) return task;
      const elapsedDays = (now - task.completedAt) / MS_PER_DAY;
      if (elapsedDays >= task.reactiveDays) {
        return { ...task, completedAt: null };
      }
      return task;
    });
  };
  const addTask = (text, reactiveDays) => {
    const task = {
      id: generateId(),
      text,
      reactiveDays: Math.max(1, Math.min(365, reactiveDays)),
      completedAt: null,
      createdAt: Date.now()
    };
    tasks.value.push(task);
    return task;
  };
  const completeTask = (taskId) => {
    const task = tasks.value.find((t) => t.id === taskId);
    if (!task || task.completedAt !== null) return;
    task.completedAt = Date.now();
  };
  const deleteTask = (taskId) => {
    tasks.value = tasks.value.filter((t) => t.id !== taskId);
  };
  const isTaskCompleted = (task) => task.completedAt !== null;
  const daysUntilReactivation = (task) => {
    if (task.completedAt === null) return null;
    const now = Date.now();
    const elapsedDays = (now - task.completedAt) / MS_PER_DAY;
    if (elapsedDays >= task.reactiveDays) return 0;
    return Math.ceil(task.reactiveDays - elapsedDays);
  };
  return {
    tasks,
    loadFromLocalStorage,
    saveToLocalStorage,
    checkAndReactivateTasks,
    addTask,
    completeTask,
    deleteTask,
    isTaskCompleted,
    daysUntilReactivation
  };
};

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { tasks, isTaskCompleted, daysUntilReactivation } = useTasks();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(tasks).length === 0) {
        _push(`<div class="p-4 md:p-8 bg-eerie-black rounded-lg shadow-md text-center"><div class="w-full md:max-w-2xl md:mx-auto">`);
        _push(ssrRenderComponent(unref(Icon), {
          icon: "heroicons:clipboard-document-list-20-solid",
          class: "w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 text-moonstone"
        }, null, _parent));
        _push(`<h2 class="text-xl md:text-2xl font-bold text-gray-100 mb-3">Willkommen bei Lovely Reminder</h2><div class="text-gray-300 space-y-3 text-left"><p class="text-sm md:text-base">Deine Aufgaben mit reaktiven Timern. Erledige eine Aufgabe und sie erscheint nach deiner gew\xE4hlten Frist wieder.</p><div class="bg-gray-700 p-3 md:p-4 rounded-lg"><h3 class="font-semibold text-moonstone mb-2 text-sm md:text-base">So funktioniert&#39;s:</h3><ol class="list-decimal list-inside space-y-1.5 text-xs md:text-sm"><li>F\xFCge Aufgaben mit einem <strong>reaktiven Timer</strong> hinzu (Tage bis zur Wiederkehr)</li><li>Hake erledigte Aufgaben ab \u2013 sie werden durchgestrichen</li><li>Nach den gesetzten Tagen wird die Aufgabe automatisch wieder aktiv</li></ol></div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/task-add",
          class: "btn-primary px-5 py-3 inline-flex items-center mt-4"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(Icon), {
                icon: "heroicons:plus-20-solid",
                class: "w-5 h-5 mr-2"
              }, null, _parent2, _scopeId));
              _push2(` Erste Aufgabe hinzuf\xFCgen `);
            } else {
              return [
                createVNode(unref(Icon), {
                  icon: "heroicons:plus-20-solid",
                  class: "w-5 h-5 mr-2"
                }),
                createTextVNode(" Erste Aufgabe hinzuf\xFCgen ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<div class="space-y-4 md:space-y-6"><div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between"><div><h2 class="text-lg md:text-xl font-bold text-gray-100">Deine Aufgaben</h2><p class="text-sm text-gray-400 mt-0.5">Denk daran: Du machst es f\xFCr euch beide. \u2665</p></div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/task-add",
          class: "btn-add px-4 py-2 inline-flex items-center text-sm self-start md:self-center"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(Icon), {
                icon: "heroicons:plus-20-solid",
                class: "w-5 h-5 mr-2"
              }, null, _parent2, _scopeId));
              _push2(` Aufgabe hinzuf\xFCgen `);
            } else {
              return [
                createVNode(unref(Icon), {
                  icon: "heroicons:plus-20-solid",
                  class: "w-5 h-5 mr-2"
                }),
                createTextVNode(" Aufgabe hinzuf\xFCgen ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><!--[-->`);
        ssrRenderList(unref(tasks), (task) => {
          _push(`<div class="bg-eerie-black rounded-lg shadow-md p-4 md:p-5"><div class="flex flex-row items-start gap-3 md:gap-4"><input type="checkbox"${ssrIncludeBooleanAttr(unref(isTaskCompleted)(task)) ? " checked" : ""}${ssrIncludeBooleanAttr(unref(isTaskCompleted)(task)) ? " disabled" : ""}${ssrRenderAttr("aria-label", unref(isTaskCompleted)(task) ? `Erledigt: ${task.text}` : `Als erledigt markieren: ${task.text}`)} class="${ssrRenderClass([unref(isTaskCompleted)(task) ? "cursor-default opacity-90" : "cursor-pointer", "mt-1 w-5 h-5 md:w-6 md:h-6 rounded border-2 flex-shrink-0 accent-green-500"])}" style="${ssrRenderStyle({ borderColor: "var(--color-border)" })}"><div class="flex-1 min-w-0"><p class="${ssrRenderClass([{ "line-through opacity-70": unref(isTaskCompleted)(task) }, "text-gray-200 text-sm md:text-base leading-relaxed"])}">${ssrInterpolate(task.text)}</p><div class="flex flex-wrap items-center gap-2 mt-2 text-xs text-gray-400">`);
          if (unref(isTaskCompleted)(task) && unref(daysUntilReactivation)(task) !== null) {
            _push(`<span>`);
            if (unref(daysUntilReactivation)(task) === 0) {
              _push(`<!--[-->Heute wieder aktiv<!--]-->`);
            } else if (unref(daysUntilReactivation)(task) === 1) {
              _push(`<!--[-->1 Tag bis zur Reaktivierung<!--]-->`);
            } else {
              _push(`<!--[-->${ssrInterpolate(unref(daysUntilReactivation)(task))} Tage bis zur Reaktivierung<!--]-->`);
            }
            _push(`</span>`);
          } else {
            _push(`<span>Alle ${ssrInterpolate(task.reactiveDays)} ${ssrInterpolate(task.reactiveDays === 1 ? "Tag" : "Tage")}</span>`);
          }
          _push(`</div></div><button type="button" class="btn-delete flex-shrink-0" aria-label="Delete task">`);
          _push(ssrRenderComponent(unref(Icon), {
            icon: "heroicons:trash-20-solid",
            class: "w-5 h-5"
          }, null, _parent));
          _push(`</button></div></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-PSTZgeQZ.mjs.map
