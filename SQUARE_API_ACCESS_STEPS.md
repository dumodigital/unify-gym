# Square API Access — Exact Steps (for the Leslie call)

**Goal:** Get 2 things from the Square account owner — the **Production Access Token** and the **Application ID**. That's what lets us wire booking + payment into the Recovery page. (The Location ID we can pull ourselves afterward using the token, so it's not needed live on the call.)

**Big picture / what went wrong last time:** API access has NOTHING to do with adding a team member. The "add a user / how much per hour" prompt from last time was Square's **Staff/payroll** section — the wrong door. API credentials live on a completely separate site: **developer.squareup.com** (same Square login, different portal).

---

## The click-path (walk Leslie through this, screen-shared, on HER login)

1. **Go to developer.squareup.com** in a new tab. (Same Square login she already uses — click "Start building" or "Account" to sign in.)
   - This is separate from the normal Square dashboard (app.squareup.com). Don't touch anything on the regular dashboard.

2. **"Name your first application"** screen:
   - Ignore the app logos (Wix, WordPress, etc.) — they're just decoration, not buttons.
   - Type a name in **Application name** → e.g. `Unify Recovery Website`
   - Check **"I agree to the Square Developer Terms of Service"**
   - Click **Continue**

3. **"What will you build first?"** screen:
   - Click **Skip** (bottom left). This only picks which docs show first — it does NOT limit API access.
   - Do NOT pick "Manage a team" (that's the wage-rate trap from last time).

4. **Credentials page** (the destination — left sidebar item "Credentials"):
   - Top of the page has a **Sandbox / Production** toggle → click **PRODUCTION** (not Sandbox).
   - Copy the **Production Application ID** (looks like `sq0idp-...`)
   - Copy the **Production Access Token** (click the copy icon next to the dots)
   - Send both to Charlie.

5. **Location ID** (same app, while she's there):
   - Click **Locations** in the left sidebar → copy the **Location ID** (looks like `L...`) → send to Charlie.
   - (Optional — Charlie can also pull this himself from the token later.)

**Done.** That's the whole thing — about 2 minutes once she's logged in.

**The three credentials I need to build in Cursor:**
1. Production Application ID
2. Production Access Token
3. Location ID

---

## What to say to Leslie (avoid the rabbit hole)
> "This is quick. Don't touch the regular Square dashboard. Open a new tab, go to developer.squareup.com, and we'll make one app together. It is NOT the add-a-team-member thing from last time — ignore anything about wages or hours."

---

## Two things to confirm / know
- **Activation / identity gate:** The Production credentials page shows a yellow banner: "You must activate your Square account for payments by visiting squareup.com/activate before you can process card payments in production." On the real Unify account this needs to be done (bank, EIN, identity), or live charges won't clear at launch even with a valid token. CONFIRM with Leslie the account is activated. If not, we can still build + test against Sandbox in the meantime.
- **Links vs. custom API — what the token is for:**
  - If we use Square's **hosted booking/checkout links** (named links Leslie creates per service in the Square dashboard), we don't strictly need the token — we just embed those links. Simpler, less custom.
  - If we build the **fully custom on-page book-and-pay** (Web Payments SDK), the Application ID + Access Token + Location ID are what make it work.
  - Grab the token regardless — it costs nothing and covers the custom path. The "final payment links" from them tell us which route we build.
- **Security:** The Production Access Token = full access to their Square account. Treat it like a password. We store it as an environment variable (Vercel), never in the repo/GitHub. Best to send it to Charlie securely, not plain email if avoidable.

---

## For testing on our own before/without their account
- Every developer app has a **Sandbox** tab with a fake test account + test card numbers — real payment flow, no real money.
- We can build and test the entire Recovery booking/payment flow in Sandbox, then swap the sandbox token for Leslie's production token to go live.
- Note: Sandbox is solid for Payments/Web Payments SDK; the Bookings API sandbox can be a bit finicky.
