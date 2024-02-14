import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { startOfMonth, endOfMonth, format } from 'date-fns';

// 2024年2月のみに画像のURLを生成する関数
const getImageUrlForDate = (date) => {
  // 2024年2月の開始日と終了日を設定
  const startDate = new Date(2024, 1, 1); // 2月1日
  const endDate = new Date(2024, 1, 29); // 2月の最終日

  // 引数の日付が2024年2月の範囲内であるかを確認
  if (date >= startDate && date <= endDate) {
    // 引数の日付が2024年2月の範囲内であれば、画像のURLを生成して返す
    const month = date.getMonth() + 1; // 月は0から始まるため、+1する
    const dayOfMonth = date.getDate();

    // 月と日を2桁の数字にフォーマットする
    const formattedMonth = month.toString().padStart(2, '0');
    const formattedDayOfMonth = dayOfMonth.toString().padStart(2, '0');

    // 日付ごとに異なる画像のURLを生成
    const imageUrl = `/images/${formattedMonth}-${formattedDayOfMonth}.png`;

    // 日付と画像を含む要素を返す
    return (
      <div>
        <div style={{ textAlign: 'center' }}>{format(date, 'd')}</div>
        <div style={{ textAlign: 'center' }}>
          <img src={imageUrl} alt={`Calendrical representation of ${format(date, 'MMMM do, yyyy')}`} width={120} height={120} style={{ display: 'inline-block' }} />
        </div>
      </div>
    );
  } else {
    // 引数の日付が2024年2月の範囲外であれば、空の要素を返す
    return null;
  }
};

// FullCalendarを含む親コンポーネント
const FebruaryCalendarWithImages = () => {
  const startDate = new Date(2024, 1, 1); // 2月1日
  const endDate = new Date(2024, 1, 29); // 2月の最終日

  return (
    <div style={{ width: '1000px', margin: 'auto', }}>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        // 2024年2月のみを表示するようにvalidRangeプロパティを設定
        validRange={{ start: startOfMonth(startDate), end: endOfMonth(endDate) }}
        // dayCellContentプロパティに関数を指定
        dayCellContent={({ date }) => getImageUrlForDate(date)}
      />
    </div>
  );
};

export default FebruaryCalendarWithImages;
