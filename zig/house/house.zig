const std = @import("std");

pub fn recite(buffer: []u8, start_verse: u32, end_verse: u32) []const u8 {
    _ = end_verse;
    _ = buffer;

    const first_verse = "This is the house that Jack built.";
    const second_verse = "This is the malt that lay in the house that Jack built.";
    const third_verse = "This is the rat that ate the malt that lay in the house that Jack built.";
    const fourth_verse = "This is the cat that killed the rat that ate the malt that lay in the house that Jack built.";
    const five_verse = "This is the dog that worried the cat that killed the rat that ate the malt that lay in the house that Jack built.";

    const begin_verse = "This is the ";
    const finish_verse = "that Jack built.";
    const first_item = "house";
    // const second_item = "malt that lay in the ";
    // const third_item = "rat that ate the ";
    // const fourth_item = "cat that killed the ";
    // const five_item = "dog that worried the ";

    if (start_verse == 1) return begin_verse + first_item + finish_verse;
    if (start_verse == 2) return second_verse;
    if (start_verse == 3) return third_verse;
    if (start_verse == 4) return fourth_verse;
    if (start_verse == 5) return five_verse;
    return first_verse;
}
