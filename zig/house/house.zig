const std = @import("std");

pub fn recite(buffer: []u8, start_verse: u32, end_verse: u32) []const u8 {
    _ = start_verse;
    _ = end_verse;

    std.debug.print("{s}\n", .{buffer});
}
