import dayjs from 'dayjs'
import { dayjsLocalizer } from 'react-big-calendar'
import 'dayjs/locale/es-mx'
dayjs.locale('es-mx')
export  const localizer = dayjsLocalizer(dayjs)