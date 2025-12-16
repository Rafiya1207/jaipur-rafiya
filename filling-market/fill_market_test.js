import { assertEquals } from "jsr:@std/assert";
import { fillMarket } from "./fill_market.js";

Deno.test("empty deck", () => {
  assertEquals(fillMarket(["ca", "d", "g", "r"], []), ["ca", "d", "g", "r"]);
});

Deno.test("one card in deck", () => {
  assertEquals(fillMarket(["ca", "d", "g", "r"], ["s"]), [
    "ca",
    "d",
    "g",
    "r",
    "s",
  ]);
});

Deno.test("empty market", () => {
  assertEquals(fillMarket([], ["s", "r", "sp", "ca", "d", "g", "r", "s"]), [
    "s",
    "r",
    "g",
    "d",
    "ca",
  ]);
});
