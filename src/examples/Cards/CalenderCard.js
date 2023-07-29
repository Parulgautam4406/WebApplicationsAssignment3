import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const CustomCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentMonth.getFullYear(), currentMonth.getMonth());
    const firstDay = getFirstDayOfMonth(currentMonth.getFullYear(), currentMonth.getMonth());

    const daysArray = [];
    for (let i = 0; i < firstDay; i++) {
      daysArray.push(<Grid item key={`empty-${i}`} />);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const isCurrentDay =
        i === new Date().getDate() && currentMonth.getMonth() === new Date().getMonth();
      daysArray.push(
        <Grid item key={`day-${i}`}>
          <Card sx={{ bgcolor: isCurrentDay ? 'primary.main' : 'background.default' }}>
            <CardContent>
              <Typography
                variant="h6"
                sx={{ color: isCurrentDay ? 'common.white' : 'text.primary' }}
              >
                {i}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      );
    }

    return daysArray;
  };

  return (
    <Card>
      <CardContent>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <IconButton onClick={handlePrevMonth}>
              <ChevronLeftIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <Typography variant="h5">
              {currentMonth.toLocaleString('default', { month: 'long' })}{' '}
              {currentMonth.getFullYear()}
            </Typography>
          </Grid>
          <Grid item>
            <IconButton onClick={handleNextMonth}>
              <ChevronRightIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Grid container spacing={1} mt={2}>
          {renderCalendarDays()}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CustomCalendar;
