defmodule ChatApi.Users.User do
  use Ecto.Schema
  use Pow.Ecto.Schema
  import Ecto.Changeset

  alias ChatApi.Conversations.Conversation
  alias ChatApi.Accounts.Account

  schema "users" do
    has_many(:conversations, Conversation, foreign_key: :assignee_id)
    belongs_to(:account, Account, type: :binary_id)

    pow_user_fields()

    timestamps()
  end

  def changeset(user_or_changeset, attrs) do
    user_or_changeset
    |> pow_changeset(attrs)
    |> cast(attrs, [:account_id])
    |> validate_required([:account_id])
  end
end
