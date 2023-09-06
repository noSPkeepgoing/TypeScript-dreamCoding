{
  /**
   * Enum
   */
  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUdENTS_PER_CLASS = 20;
  const DAYS_ENUM = Object.freeze({ MON: 0, TUE: 1, WED: 2, THU: 3 });
  const dayOfToday = DAYS_ENUM.THU;

  // TypeScript
  enum Days {
    Mon = 1, // default 0
    Tue,
    Wed,
    Thu,
  }
}
