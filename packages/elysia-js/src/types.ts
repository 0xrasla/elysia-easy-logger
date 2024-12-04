export interface LoggerOptions {
  /** Enable console logging (default: true) */
  console?: boolean;
  /** Enable file logging (default: false) */
  file?: boolean;
  /** File path for logs (default: './logs/app.log') */
  filePath?: string;
  /** Minimum log level (default: 'info') */
  level?: LogLevel;
  /** Custom format for log messages */
  format?: string;
  /** Paths to skip from logging */
  skip?: string[];
  /** Include IP address in logs (default: false) */
  includeIp?: boolean;
}

export type LogLevel = "debug" | "info" | "warn" | "error";

export interface LogEntry {
  /** Timestamp of the log entry */
  timestamp: Date;
  /** Log level */
  level: LogLevel;
  /** HTTP method or custom identifier */
  method: string;
  /** Request path or log context */
  path: string;
  /** HTTP status code */
  statusCode: number;
  /** Request duration in milliseconds */
  duration: number;
  /** Optional message */
  message?: string;
  /** IP address if available and enabled */
  ip?: string;
}

export interface ILogger {
  /** Log a debug message */
  debug(input: string | Partial<LogEntry>): void;
  /** Log an info message */
  info(input: string | Partial<LogEntry>): void;
  /** Log a warning message */
  warn(input: string | Partial<LogEntry>): void;
  /** Log an error message */
  error(input: string | Partial<LogEntry>): void;
  /** Log a message with a specific level */
  log(level: LogLevel, input: string | Partial<LogEntry>): void;
}
