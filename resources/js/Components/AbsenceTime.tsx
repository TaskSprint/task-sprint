import { useLaravelReactI18n } from 'laravel-react-i18n';
import React from 'react';

// використаня:    const date = new Date('2024-12-15T14:00:00Z');
//                  <LastVisitInfo lastVisit={date} />

interface AbsenceTimeProps {
    lastVisit: string | Date; // ISO строка или Date объект
}

const AbsenceTime: React.FC<AbsenceTimeProps> = ({ lastVisit }) => {
    const { t } = useLaravelReactI18n();

    const formatTimeSince = (lastVisit: string | Date): string => {
        const lastVisitDate = new Date(lastVisit);
        const now = new Date();
        const diffMs = now.getTime() - lastVisitDate.getTime();

        const seconds = Math.floor(diffMs / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const weeks = Math.floor(days / 7);
        const months = Math.floor(days / 30); // упрощённо
        const years = Math.floor(days / 365); // упрощённо
        const nowTime = -1;

        if (years > 0) return `${years}`;
        if (months > 0) return `${months}`;
        if (weeks > 0) return `${weeks}`;
        if (days > 0) return `${days}`;
        if (hours > 0) return `${hours}`;
        if (minutes > 0) return `${minutes}`;
        return `${nowTime}`;
    };

    const formatNameTimeSince = (lastVisit: string | Date): string => {
        const lastVisitDate = new Date(lastVisit);
        const now = new Date();
        const diffMs = now.getTime() - lastVisitDate.getTime();

        const seconds = Math.floor(diffMs / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const weeks = Math.floor(days / 7);
        const months = Math.floor(days / 30); // упрощённо
        const years = Math.floor(days / 365); // упрощённо

        if (years === 1) return t('absence-time.year');
        if (months === 1) return t('absence-time.month');
        if (weeks === 1) return t('absence-time.week');
        if (days === 1) return t('absence-time.day');
        if (hours === 1) return t('absence-time.hour');
        if (minutes === 1) return t('absence-time.minute');
        if (years > 0) return t('absence-time.years');
        if (months > 0) return t('absence-time.months');
        if (weeks > 0) return t('absence-time.weeks');
        if (days > 0) return t('absence-time.days');
        if (hours > 0) return t('absence-time.hours');
        if (minutes > 0) return t('absence-time.minutes');
        return t('absence-time.now');
    };

    const timePassed = formatTimeSince(lastVisit);
    const timeName = formatNameTimeSince(lastVisit);

    if (timePassed === '-1') {
        return <p>{timeName}</p>;
    } else {
        return (
            <p>
                {timePassed} {timeName}
            </p>
        );
    }
};

export default AbsenceTime;
