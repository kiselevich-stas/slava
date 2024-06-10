import type { CardProps } from '~/src/types/pluses/plusesType'
import { UiIconsBenefitIcon, UiIconsOnlineService, UiIconsRelevanceIcon, UiIconsWideChooseIcon } from '#components'

export const cards: CardProps[] = [
  {
    icon: UiIconsBenefitIcon,
    title: 'выгода',
    description: 'Узнайте о выгодных сервисных предложениях Nissan именно для вашего автомобиля'
  },
  {
    icon: UiIconsRelevanceIcon,
    title: 'актуальность',
    description: 'Выберите актуальные для вас сервисные предложения'
  },
  {
    icon: UiIconsWideChooseIcon,
    title: 'широкий выбор',
    description: 'Выберите дилера, который вам подходит'
  },
  {
    icon: UiIconsOnlineService,
    title: 'онлайн обслуживание',
    description: 'Отправьте дилеру данные о вашем автомобиле в форме удобной анкеты'
  }
]
