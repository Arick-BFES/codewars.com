def make_readable(s):
    hour = str(s//3600).rjust(2, "0")
    min = str((s//60)%60).rjust(2, "0")
    sec = str(s%60).rjust(2, "0")
    return hour + ":" + min + ":" + sec