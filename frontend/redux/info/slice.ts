import { AnyAction, createSlice, Reducer } from "@reduxjs/toolkit";
import { AppDispatch, AppState } from "@/frontend/redux/store";

export interface ApiError {
  msg: string;
  value: any;
}

export interface InfoMessage {
  id?: string;
  type: "danger" | "info" | "success";
  text: string;
}

export interface InfoState {
  errors: Record<string, ApiError>;
  messages: InfoMessage[];
  banner: string | undefined;
  authState: string | undefined;
}

const initialState: InfoState = {
  errors: {},
  messages: [],
  banner: undefined,
  authState: undefined,
};

function isAnyPendingAction(action: AnyAction): boolean {
  return action.type.endsWith("pending");
}

function isAnyRejectedAction(action: AnyAction): boolean {
  return action.type.endsWith("rejected");
}
function isAnyFulfilledAction(action: AnyAction): boolean {
  return action.type.endsWith("fulfilled");
}

export function message(dispatch: AppDispatch, msg: InfoMessage): void {
  const id = Math.random().toString(36).substr(2, 9);
  msg.id = id;
  dispatch(addMessage(msg));

  setTimeout(() => {
    dispatch(removeMessage(id));
  }, 4200);
}

export const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    clearErrors(state) {
      state.errors = {};
      state.banner = undefined;
      state.messages = [];
    },
    addErrors(state, action) {
      state.errors = action.payload;
      state.banner = action.payload.message;
    },
    addMessage(state, action) {
      state.messages.push(action.payload);
    },
    removeMessage(state, action) {
      state.messages = state.messages.filter((m) => m.id !== action.payload);
    },
    updateAuthState(state, action) {
      state.authState = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(isAnyPendingAction, (state) => {
        state.errors = {};
      })
      .addMatcher(isAnyFulfilledAction, (state) => {
        state.errors = {};
      })
      .addMatcher(isAnyRejectedAction, (state, action) => {
        if (action.payload) {
          state.errors = action.payload;
          if (action.payload.message && action.type !== "user/get/rejected") {
            state.messages.push({
              text: action.payload.message,
              type: "danger",
            });
          }
        }
      });
  },
});

export const { clearErrors, addMessage, removeMessage, addErrors, updateAuthState } = infoSlice.actions;

export const selectErrors = (state: AppState): Record<string, ApiError> => state.info.errors;
export const selectErrorBanner = (state: AppState): string | undefined => state.info.banner;
export const selectMessages = (state: AppState): InfoMessage[] => state.info.messages;
export const selectAuthState = (state: AppState): string | undefined => state.info.authState;

export default infoSlice.reducer as Reducer<InfoState>;
