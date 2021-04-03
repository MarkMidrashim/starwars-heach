import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'
import elementPtLocale from 'element-ui/lib/locale/lang/pt-br'
import ptLocale from './pt'

Vue.use(VueI18n)

const messages = {
	pt: {
		...ptLocale,
		...elementPtLocale
	}
}
export function getLanguage() {
	const chooseLanguage = Cookies.get('language')
	if (chooseLanguage) return chooseLanguage

	// if has not choose language
	const language = (navigator.language || navigator.browserLanguage).toLowerCase()
	const locales = Object.keys(messages)
	for (const locale of locales) {
		if (language.indexOf(locale) > -1) {
			return locale
		}
	}
	return 'pt'
}
const i18n = new VueI18n({
	locale: getLanguage(),
	messages
})

export default i18n
