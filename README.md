# financial-flow-analyzer

Create app for calculating a company's cash flow statement using the indirect method.
Information Required:
•	Income Statement: You'll need the net income figure and details of non-cash expenses (e.g., depreciation, amortization).
•	Balance Sheet (Comparative): You'll need the beginning and ending balances for specific accounts, including: 
o	Current Assets (e.g., cash, accounts receivable, inventory)
o	Current Liabilities (e.g., accounts payable, accrued expenses)
o	Non-Current Assets (for significant purchases or sales)
o	Equity (for issuance or repurchase of stock)
o	Long-Term Debt (for issuance or repayment of debt)
Steps:
1.	Cash Flow from Operating Activities:
o	Start with Net Income from the Income Statement.
o	Adjust for Non-Cash Expenses: Add back depreciation, amortization, and any other non-cash expenses included in the net income calculation.
o	Adjust for Changes in Working Capital: 
	Analyze the changes in current asset and liability accounts between the beginning and ending balance sheets. 
	Increase in Current Assets: Subtract the increase from net income (e.g., increase in accounts receivable means less cash was collected).
	Decrease in Current Assets: Add the decrease to net income (e.g., decrease in inventory means cash was used for purchases).
	Increase in Current Liabilities: Add the increase to net income (e.g., increase in accounts payable means the company has more time to pay suppliers, resulting in cash inflow).
	Decrease in Current Liabilities: Subtract the decrease from net income (e.g., decrease in accounts payable means the company paid suppliers earlier, resulting in cash outflow).
o	Calculate Cash Flow from Operating Activities by summing the adjusted net income and working capital changes.
2.	Cash Flow from Investing Activities:
o	Identify cash inflows from selling investments or property, plant, and equipment (PPE).
o	Identify cash outflows from purchasing investments or PPE.
o	Calculate Cash Flow from Investing Activities by subtracting cash outflows from cash inflows.
3.	Cash Flow from Financing Activities:
o	Identify cash inflows from issuing stock or taking on long-term debt.
o	Identify cash outflows from repurchasing stock or repaying long-term debt.
o	Calculate Cash Flow from Financing Activities by subtracting cash outflows from cash inflows.
4.	Total Cash Flow:
o	Sum the cash flow from operating activities, investing activities, and financing activities.
Remember:
•	Analyze the changes in accounts carefully to determine if they represent cash inflows or outflows.
•	Consider using a spreadsheet to organize your calculations for better clarity.
Additional Notes:
•	You may encounter other non-cash items that require adjustments. Research specific scenarios if needed.
•	This prompt provides a general framework. Specific financial statements might require additional considerations.
By following these steps and using the provided information, you can calculate a company's cash flow statement using the indirect method.


## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/financial-flow-analyzer.git
cd financial-flow-analyzer
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
