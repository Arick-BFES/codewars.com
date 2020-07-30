public static class TimeFormat
{
    public static string GetReadableTime(int seconds)
    {
        var hour = seconds/3600;
        var min = (seconds/60)%60;
        var sec = seconds % 60;
        return hour.ToString().PadLeft(2, '0') +":"+ min.ToString().PadLeft(2, '0') +":"+ sec.ToString().PadLeft(2, '0');
    }
}