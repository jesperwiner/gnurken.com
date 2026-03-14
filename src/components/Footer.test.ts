import { describe, it, expect } from "vitest";
import { getCopyrightYear } from "./Footer";

describe("getCopyrightYear", () => {
  it("returns just 2026 when the current year is 2026", () => {
    expect(getCopyrightYear(2026)).toBe("2026");
  });

  it("returns a range when the current year is after 2026", () => {
    expect(getCopyrightYear(2027)).toBe("2026-2027");
    expect(getCopyrightYear(2030)).toBe("2026-2030");
  });
});
