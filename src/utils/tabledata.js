
export const TableHeader = ['Дата', 'Время', 'Номер', 'Виртуальный номер', 'Тип звонка', 'Запись', 'Врач', 'Имя администратора',
'Имя клиента', 'Был ли раньше', 'Причина отказа', 'Долго', 'Спец Теги',
'Анализ', 'Оценка работы администратора', 'Текст звонка']

export const getPageCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit)
}

function transformData(dataArray) {
    return dataArray.map(item => [
        item.date,
        item.time,
        item.phoneNumber,
        item.virtualNumber,
        item.isIncoming,
        item.record,
        item.doctor,
        item.administratorName,
        item.clientName,
        item.wasBefore,
        item.whyNo,
        item.lateMarker,
        item.complaint,
        item.analysis,
        item.adminQuality,
        item.text,
    ]);
}
export {transformData};

function transformFilterDict(dict, page, pageSize) {
    let dataDict = {};

    dataDict['newestDate'] = reverseDateFormat(dict['dateToValue']);
    dataDict['oldestDate'] = reverseDateFormat(dict['dateFromValue']);
    dataDict['newestTime'] = dict['timeToValue'];
    dataDict['oldestTime'] = dict['timeFromValue'];

    dataDict['pageNumber'] = page;
    dataDict['pageSize'] = pageSize;
    dataDict['newFilters'] = true;

    if (dict['Номер'] !== 'Все') {
        dataDict['phoneNumber'] = dict['Номер'];
    }

    dataDict['filters'] = {
        ...(dict['Тип звонка'] === 'Все' ? {} : { 'isIncoming': dict['Тип звонка'] }),
        ...(dict['Запись'] === 'Все' ? {} : { 'record': dict['Запись'] }),
        ...(dict['Врач'] === 'Все' ? {} : { 'doctor': dict['Врач'] }),
        ...(dict['Имя администратора'] === 'Все' ? {} : { 'administratorName': dict['Имя администратора'] }),
        ...(dict['Имя клиента'] === 'Все' ? {} : { 'clientName': dict['Имя клиента'] }),
        ...(dict['Был ли раньше'] === 'Все' ? {} : { 'wasBefore': dict['Был ли раньше'] }),
        ...(dict['Долго'] === 'Все' ? {} : { 'lateMarker': dict['Долго'] }),
        ...(dict['Спец Теги'] === 'Все' ? {} : { 'complaint': dict['Спец Теги'] }),
    }

    return dataDict;
}
export {transformFilterDict};

function transformFiltersOptions(dict) {
    let optionsDict ={};

    optionsDict['Тип звонка'] = dict['incoming']
    optionsDict['Запись'] = dict['record']
    optionsDict['Врач'] = dict['doctor']
    optionsDict['Имя администратора'] = dict['administratorName']
    optionsDict['Имя клиента'] = dict['clientName']
    optionsDict['Был ли раньше'] = dict['wasBefore']
    optionsDict['Спец Теги'] = dict['complaint']

    return optionsDict;
}

export {transformFiltersOptions};

const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
};

export {formatDate};

function reverseDateFormat(dateString) {
    const parts = dateString.split('-');
    if (parts.length === 3) {
        const [year, month, day] = parts;
        return `${day}.${month}.${year}`;
    }
    return dateString;
}
export {reverseDateFormat};